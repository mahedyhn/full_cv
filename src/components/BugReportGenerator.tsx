import { useState } from 'react';
import {
    Send,
    Copy,
    Check,
    AlertTriangle,
    Zap,
    Target,
    ChevronDown,
    Sparkles,
    Wand2,
    Bug,
    Shield,
    Lightbulb,
    RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BugReport {
    summary: string;
    description: string;
    stepsToReproduce: string[];
    expectedBehavior: string;
    actualBehavior: string;
    severity: 'Blocker' | 'Critical' | 'Major' | 'Minor' | 'Trivial';
    priority: 'Highest' | 'High' | 'Medium' | 'Low' | 'Lowest';
    affectedModules: string[];
    environment: string;
}

const BugReportGenerator = () => {
    const [inputText, setInputText] = useState('');
    const [bugReport, setBugReport] = useState<BugReport | null>(null);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    // AI-powered bug report generation using prompt-based transformation
    const generateBugReport = async (text: string) => {
        setLoading(true);
        try {
            // Simulated AI transformation - in production, this would call an API
            await new Promise(resolve => setTimeout(resolve, 1500));

            const report = transformTextToBugReport(text);
            setBugReport(report);
        } catch (error) {
            console.error('Failed to generate bug report:', error);
        } finally {
            setLoading(false);
        }
    };

    const pickHighestMatch = <T extends string>(
        text: string,
        keywordMap: Record<T, string[]>,
        rank: Record<T, number>,
        fallback: T
    ): T => {
        let selected = fallback;
        let selectedRank = rank[fallback];

        (Object.entries(keywordMap) as [T, string[]][]).forEach(([level, keywords]) => {
            if (keywords.some(kw => text.includes(kw)) && rank[level] > selectedRank) {
                selected = level;
                selectedRank = rank[level];
            }
        });

        return selected;
    };

    // Transform simple description into structured bug report
    const transformTextToBugReport = (text: string): BugReport => {
        const lowerText = text.toLowerCase();

        const severityKeywords: Record<BugReport['severity'], string[]> = {
            Blocker: ['crash', 'not working', 'broken', 'unable to', 'cannot'],
            Critical: ['loses data', 'data loss', 'security', 'payment', 'revenue', 'loss'],
            Major: ['wrong', 'incorrect', 'error', 'fails', 'failed', 'bug'],
            Minor: ['slow', 'layout', 'display', 'cosmetic', 'lag', 'freeze'],
            Trivial: ['typo', 'spacing', 'color', 'minor text', 'misspell']
        };

        const severityRank: Record<BugReport['severity'], number> = {
            Blocker: 5,
            Critical: 4,
            Major: 3,
            Minor: 2,
            Trivial: 1
        };

        const severity = pickHighestMatch(lowerText, severityKeywords, severityRank, 'Major');

        // Priority is urgency of the fix — independent from severity (impact)
        const priorityKeywords: Record<BugReport['priority'], string[]> = {
            Highest: ['urgent', 'asap', 'p0', 'production', 'cannot', 'unable to', 'crash', 'security', 'payment', 'revenue', 'data loss', 'loses data'],
            High: ['not working', "doesn't work", 'doesnt work', 'broken', 'fails', 'failed', 'error', 'login'],
            Medium: ['wrong', 'incorrect', 'slow', 'lag', 'hang', 'freeze'],
            Low: ['layout', 'display', 'cosmetic', 'ui'],
            Lowest: ['typo', 'spacing', 'color', 'misspell']
        };

        const priorityRank: Record<BugReport['priority'], number> = {
            Highest: 5,
            High: 4,
            Medium: 3,
            Low: 2,
            Lowest: 1
        };

        const severityDefaultPriority: Record<BugReport['severity'], BugReport['priority']> = {
            Blocker: 'Highest',
            Critical: 'Highest',
            Major: 'High',
            Minor: 'Medium',
            Trivial: 'Low'
        };

        const keywordPriority = pickHighestMatch(lowerText, priorityKeywords, priorityRank, 'Medium');
        const defaultPriority = severityDefaultPriority[severity];
        const priority = priorityRank[keywordPriority] >= priorityRank[defaultPriority]
            ? keywordPriority
            : defaultPriority;

        // Extract potential modules affected
        const moduleKeywords: Record<string, string[]> = {
            'Authentication': ['login', 'auth', 'password', 'sign in'],
            'Payment': ['payment', 'checkout', 'stripe', 'billing', 'charge'],
            'UI/UX': ['button', 'layout', 'display', 'visual', 'styling'],
            'API': ['api', 'response', 'request', 'endpoint'],
            'Database': ['data', 'save', 'load', 'fetch', 'database'],
            'Performance': ['slow', 'lag', 'freeze', 'hang', 'performance']
        };

        const affectedModules: string[] = [];
        Object.entries(moduleKeywords).forEach(([module, keywords]) => {
            if (keywords.some(kw => lowerText.includes(kw))) {
                affectedModules.push(module);
            }
        });

        // Generate steps to reproduce
        const stepsToReproduce = generateSteps(text);

        return {
            summary: generateSummary(text),
            description: text,
            stepsToReproduce,
            expectedBehavior: generateExpectedBehavior(text),
            actualBehavior: generateActualBehavior(text),
            severity,
            priority: priorityMap[severity],
            affectedModules: affectedModules.length > 0 ? affectedModules : ['General'],
            environment: 'Chrome/Firefox, macOS/Windows/Linux, Latest version'
        };
    };

    const generateSummary = (text: string): string => {
        const sentences = text.split(/[.!?]/)[0].trim();
        return sentences.length > 100 ? sentences.substring(0, 97) + '...' : sentences;
    };

    const generateSteps = (text: string): string[] => {
        const steps: string[] = [];
        const lowerText = text.toLowerCase();

        // First step - always navigate or setup
        if (lowerText.includes('admin') || lowerText.includes('dashboard')) {
            steps.push('Navigate to the admin dashboard or relevant section');
        } else if (lowerText.includes('login') || lowerText.includes('auth')) {
            steps.push('Attempt to log in with valid credentials');
        } else {
            steps.push('Open the application and navigate to the affected feature');
        }

        // Middle steps - key actions
        if (lowerText.includes('click') || lowerText.includes('submit')) {
            steps.push('Perform the action that triggers the bug (click, submit, etc.)');
        } else if (lowerText.includes('upload')) {
            steps.push('Upload the file or media as per normal workflow');
        } else if (lowerText.includes('filter') || lowerText.includes('search')) {
            steps.push('Apply the relevant filter or search criteria');
        } else {
            steps.push('Execute the normal user workflow that reveals the issue');
        }

        // Final step - observe
        steps.push('Observe the incorrect behavior');
        steps.push('Compare against expected behavior');

        return steps;
    };

    const generateExpectedBehavior = (text: string): string => {
        if (text.toLowerCase().includes('should')) {
            const shouldIdx = text.toLowerCase().indexOf('should');
            return text.substring(shouldIdx, shouldIdx + 100).replace(/should\s*/i, '');
        }
        return 'The system should perform the intended action without errors and maintain data integrity.';
    };

    const generateActualBehavior = (text: string): string => {
        const sentences = text.split(/[.!?]/);
        const describedIssue = sentences.find(s =>
            s.toLowerCase().includes('instead') ||
            s.toLowerCase().includes('but') ||
            s.toLowerCase().includes('however')
        );
        return describedIssue ? describedIssue.trim() : 'The system does not behave as expected, resulting in incorrect outcomes.';
    };

    const copyToClipboard = () => {
        if (!bugReport) return;

        const reportText = `
SUMMARY
${bugReport.summary}

DESCRIPTION
${bugReport.description}

STEPS TO REPRODUCE
${bugReport.stepsToReproduce.map((step, i) => `${i + 1}. ${step}`).join('\n')}

EXPECTED BEHAVIOR
${bugReport.expectedBehavior}

ACTUAL BEHAVIOR
${bugReport.actualBehavior}

SEVERITY: ${bugReport.severity}
PRIORITY: ${bugReport.priority}
AFFECTED MODULES: ${bugReport.affectedModules.join(', ')}
ENVIRONMENT: ${bugReport.environment}
    `.trim();

        navigator.clipboard.writeText(reportText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText.trim()) {
            generateBugReport(inputText);
        }
    };

    const getSeverityColor = (severity: string) => {
        const colors: Record<string, string> = {
            'Blocker': 'bg-red-100 text-red-800 border-red-300',
            'Critical': 'bg-orange-100 text-orange-800 border-orange-300',
            'Major': 'bg-yellow-100 text-yellow-800 border-yellow-300',
            'Minor': 'bg-blue-100 text-blue-800 border-blue-300',
            'Trivial': 'bg-gray-100 text-gray-800 border-gray-300'
        };
        return colors[severity] || colors['Major'];
    };

    const getSeverityBgClass = (severity: string) => {
        const classes: Record<string, string> = {
            'Blocker': 'bg-gradient-to-br from-red-900/50 to-red-900/20 border-red-500/50',
            'Critical': 'bg-gradient-to-br from-orange-900/50 to-orange-900/20 border-orange-500/50',
            'Major': 'bg-gradient-to-br from-yellow-900/50 to-yellow-900/20 border-yellow-500/50',
            'Minor': 'bg-gradient-to-br from-blue-900/50 to-blue-900/20 border-blue-500/50',
            'Trivial': 'bg-gradient-to-br from-gray-900/50 to-gray-900/20 border-gray-500/50'
        };
        return classes[severity] || classes['Major'];
    };

    const getSeverityIcon = (severity: string) => {
        const icons: Record<string, JSX.Element> = {
            'Blocker': <AlertTriangle className="w-5 h-5 text-red-400" />,
            'Critical': <Zap className="w-5 h-5 text-orange-400" />,
            'Major': <AlertTriangle className="w-5 h-5 text-yellow-400" />,
            'Minor': <Target className="w-5 h-5 text-blue-400" />,
            'Trivial': <ChevronDown className="w-5 h-5 text-gray-400" />
        };
        return icons[severity] || icons['Major'];
    };

    const getPriorityIcon = (priority: string) => {
        const icons: Record<string, JSX.Element> = {
            'Highest': <AlertTriangle className="w-5 h-5 text-red-400" />,
            'High': <Zap className="w-5 h-5 text-orange-400" />,
            'Medium': <Target className="w-5 h-5 text-blue-400" />,
            'Low': <ChevronDown className="w-5 h-5 text-green-400" />,
            'Lowest': <ChevronDown className="w-5 h-5 text-gray-400" />
        };
        return icons[priority] || icons['Medium'];
    };

    const getPriorityBgClass = (priority: string) => {
        const classes: Record<string, string> = {
            Highest: 'bg-gradient-to-br from-red-900/50 to-red-900/20 border-red-500/50',
            High: 'bg-gradient-to-br from-orange-900/50 to-orange-900/20 border-orange-500/50',
            Medium: 'bg-gradient-to-br from-purple-900/50 to-purple-900/20 border-purple-500/50',
            Low: 'bg-gradient-to-br from-green-900/50 to-green-900/20 border-green-500/50',
            Lowest: 'bg-gradient-to-br from-gray-900/50 to-gray-900/20 border-gray-500/50'
        };
        return classes[priority] || classes.Medium;
    };

    const getPriorityTextClass = (priority: string) => {
        const classes: Record<string, string> = {
            Highest: 'text-red-200',
            High: 'text-orange-200',
            Medium: 'text-purple-200',
            Low: 'text-green-200',
            Lowest: 'text-gray-200'
        };
        return classes[priority] || classes.Medium;
    };

    return (
        <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/3 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-12 sm:mb-16 text-center px-4"
                >
                    <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400 flex-shrink-0" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 flex-shrink-0" />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Wand2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 flex-shrink-0" />
                        </motion.div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                        AI Bug Report Generator
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-indigo-200 mb-2">
                        Transform casual descriptions into professional Jira-ready reports
                    </p>
                    <p className="text-xs sm:text-sm text-indigo-300 font-mono tracking-wider">
                        Powered by intelligent keyword analysis 🚀
                    </p>
                </motion.div>

                {/* Input Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 mb-12 border border-indigo-500/30 backdrop-blur-xl"
                >
                    <div className="flex items-center gap-2 sm:gap-3 mb-6">
                        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex-shrink-0">
                            <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <label className="text-base sm:text-lg font-bold text-white truncate">
                            Describe Your Bug
                        </label>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="relative mb-6 w-full">
                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Example: When I click the submit button after filling the form, the page shows an error message but nothing happens. The form data should be saved but it's not appearing in the database."
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-900/50 border-2 border-indigo-500/50 rounded-lg sm:rounded-xl focus:outline-none focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 transition-all resize-none text-white placeholder:text-slate-400 backdrop-blur text-sm sm:text-base"
                                rows={5}
                                minLength={10}
                                maxLength={2000}
                            />
                            <div className="absolute bottom-4 right-4 text-xs text-indigo-400 font-mono pointer-events-none">
                                {inputText.length}/2000
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={!inputText.trim() || loading}
                            whileHover={{ scale: !loading && inputText.trim() ? 1.02 : 1 }}
                            whileTap={{ scale: !loading && inputText.trim() ? 0.98 : 1 }}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 text-white font-bold py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 sm:gap-3 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 disabled:shadow-none text-sm sm:text-base"
                        >
                            {loading ? (
                                <>
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                                        <Sparkles className="w-5 h-5" />
                                    </motion.div>
                                    <span className="hidden sm:inline">Analyzing your bug...</span>
                                    <span className="sm:hidden">Analyzing...</span>
                                </>
                            ) : (
                                <>
                                    <Wand2 className="w-5 h-5 flex-shrink-0" />
                                    <span className="hidden sm:inline">Generate Professional Report</span>
                                    <span className="sm:hidden">Generate Report</span>
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>

                {/* Output Section */}
                <AnimatePresence mode="wait">
                    {bugReport && (
                        <motion.div
                            key="report"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4 sm:space-y-6 w-full"
                        >
                            {/* Summary Card */}
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-indigo-500/30 backdrop-blur-xl w-full"
                            >
                                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-6 sm:p-8">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <Bug className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-300 flex-shrink-0 mt-0 sm:mt-1" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-mono text-indigo-200 mb-2 uppercase tracking-widest truncate">Bug Summary</p>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-white break-words line-clamp-3">{bugReport.summary}</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                                    {/* Severity & Priority Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                        {/* Severity Badge */}
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`p-4 rounded-lg sm:rounded-xl border-2 backdrop-blur ${getSeverityBgClass(bugReport.severity)}`}
                                        >
                                            <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Severity</p>
                                            <div className="flex items-center gap-2 min-w-0">
                                                {getSeverityIcon(bugReport.severity)}
                                                <span className="text-lg sm:text-xl font-bold truncate">{bugReport.severity}</span>
                                            </div>
                                        </motion.div>

                                        {/* Priority Badge */}
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`p-4 rounded-lg sm:rounded-xl border-2 backdrop-blur ${getPriorityBgClass(bugReport.priority)}`}
                                        >
                                            <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Priority</p>
                                            <div className="flex items-center gap-2 min-w-0">
                                                {getPriorityIcon(bugReport.priority)}
                                                <span className={`text-lg sm:text-xl font-bold truncate ${getPriorityTextClass(bugReport.priority)}`}>{bugReport.priority}</span>
                                            </div>
                                        </motion.div>

                                        {/* Modules */}
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="p-4 rounded-lg sm:rounded-xl border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-900/50 to-cyan-900/20 backdrop-blur"
                                        >
                                            <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Modules</p>
                                            <div className="flex flex-wrap gap-1">
                                                {bugReport.affectedModules.slice(0, 2).map((module) => (
                                                    <span
                                                        key={module}
                                                        className="px-2 py-1 bg-cyan-500/30 text-cyan-200 rounded text-xs font-semibold"
                                                        title={module}
                                                    >
                                                        {module.split('/')[0]}
                                                    </span>
                                                ))}
                                                {bugReport.affectedModules.length > 2 && (
                                                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-200 rounded text-xs font-semibold">
                                                        +{bugReport.affectedModules.length - 2}
                                                    </span>
                                                )}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                            {/* Expandable Sections */}
                            <div className="space-y-3 sm:space-y-4 w-full">
                                {[
                                    {
                                        id: 'description',
                                        title: 'Description',
                                        content: bugReport.description,
                                        icon: '📝',
                                        color: 'from-blue-600 to-cyan-600'
                                    },
                                    {
                                        id: 'steps',
                                        title: 'Steps to Reproduce',
                                        content: bugReport.stepsToReproduce.map((step, i) => `${i + 1}. ${step}`).join('\n'),
                                        icon: '📋',
                                        color: 'from-indigo-600 to-purple-600'
                                    },
                                    {
                                        id: 'expected',
                                        title: 'Expected Behavior',
                                        content: bugReport.expectedBehavior,
                                        icon: '✅',
                                        color: 'from-green-600 to-emerald-600'
                                    },
                                    {
                                        id: 'actual',
                                        title: 'Actual Behavior',
                                        content: bugReport.actualBehavior,
                                        icon: '❌',
                                        color: 'from-red-600 to-orange-600'
                                    },
                                    {
                                        id: 'environment',
                                        title: 'Environment',
                                        content: bugReport.environment,
                                        icon: '🔧',
                                        color: 'from-yellow-600 to-orange-600'
                                    }
                                ].map((section, idx) => (
                                    <motion.div
                                        key={section.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
                                        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg sm:rounded-2xl shadow-lg border border-slate-700/50 overflow-hidden backdrop-blur-xl hover:border-indigo-500/50 transition-all w-full"
                                    >
                                        <button
                                            onClick={() =>
                                                setExpandedSection(expandedSection === section.id ? null : section.id)
                                            }
                                            className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-slate-700/50 transition-colors group text-left"
                                            aria-expanded={expandedSection === section.id}
                                            aria-label={`Toggle ${section.title}`}
                                        >
                                            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                                                <span className="text-xl sm:text-2xl flex-shrink-0">{section.icon}</span>
                                                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent truncate">
                                                    {section.title}
                                                </span>
                                            </h3>
                                            <motion.div
                                                animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="group-hover:text-indigo-400 transition-colors flex-shrink-0 ml-2"
                                            >
                                                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-300" />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence>
                                            {expandedSection === section.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="border-t border-slate-700/50 bg-slate-900/50"
                                                >
                                                    <div className="px-4 sm:px-6 py-4 sm:py-5 whitespace-pre-wrap text-indigo-100 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                                                        {section.content}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Copy Button */}
                            <motion.button
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.35 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={copyToClipboard}
                                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 sm:gap-3 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 text-sm sm:text-base"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-5 h-5 flex-shrink-0" />
                                        <span className="hidden sm:inline">Report Copied to Clipboard!</span>
                                        <span className="sm:hidden">Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-5 h-5 flex-shrink-0" />
                                        <span className="hidden sm:inline">Copy Complete Report for Jira</span>
                                        <span className="sm:hidden">Copy Report</span>
                                    </>
                                )}
                            </motion.button>

                            {/* Reset Button */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    setBugReport(null);
                                    setInputText('');
                                    setExpandedSection(null);
                                }}
                                className="w-full bg-slate-700/50 hover:bg-slate-700 text-slate-200 font-semibold py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl transition-all border border-slate-600/50 hover:border-slate-500 flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                <RotateCcw className="w-4 h-4 flex-shrink-0" />
                                <span className="hidden sm:inline">Generate Another Report</span>
                                <span className="sm:hidden">New Report</span>
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Example Bugs Section */}
                {!bugReport && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full"
                    >
                        {[
                            { title: "❌ Functional Bug", desc: "The login button doesn't work. I enter my credentials and click Submit, but nothing happens." },
                            { title: "💳 Payment Bug", desc: "Payment shows success but no order is created in the system or admin panel." },
                            { title: "🖼️ UI Bug", desc: "The profile picture doesn't update until I refresh the page." },
                            { title: "📊 Data Bug", desc: "The dashboard total is wrong after applying a date filter." }
                        ].map((example, idx) => (
                            <motion.button
                                key={idx}
                                onClick={() => setInputText(example.desc)}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="text-left bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-indigo-500/30 hover:border-indigo-500/60 rounded-lg sm:rounded-xl p-4 sm:p-5 transition-all backdrop-blur-xl group active:bg-slate-800/80"
                            >
                                <p className="font-bold text-indigo-300 mb-2 group-hover:text-indigo-200 transition-colors text-sm sm:text-base">{example.title}</p>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed group-hover:text-slate-200 transition-colors line-clamp-2">
                                    {example.desc}
                                </p>
                                <p className="text-xs text-slate-500 mt-3 group-hover:text-slate-400 transition-colors">
                                    Click to try →
                                </p>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default BugReportGenerator;
