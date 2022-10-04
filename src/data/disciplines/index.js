import EnglishIcon from './icons/english.svg';
import MathIcon from './icons/math.svg';
import ScienceIcon from './icons/science.svg';
import SocialStudiesIcon from './icons/social_studies.svg';

const disciplines = {
    socialStudies: {
        name: 'Social Studies',
        icon: SocialStudiesIcon,
        rubrics: {
            'social studies': {
                questions: [
                    {
                        text: 'Does the task ask you to develop a point of view?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task ask you to develop a set of evidence that supports your point of view?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task ask you to gather evidence from both primary and secondary sources?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task ask you to defend your viewpoint compared to other points of view',
                        type: 'y/n',
                    },
                    {
                        text: 'Did the task ask you to collect a set of evidence that supports other points of view?',
                        type: 'y/n',
                    },
                    {
                        text: 'What kinds of analysis did the task require of you?',
                        type: 'textarea',
                    },
                    {
                        text: 'What kinds of connections does the task ask you to do?',
                        type: 'textarea',
                    },
                    {
                        text: 'Does the task require you to communicate your ideas, findings, conclusions, etc?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task require you practice the craft of the communication strategy (ie, research paper, documentary, podcast, etc)',
                        type: 'y/n',
                    },
                ],
            },
        },
    },
    math: {
        name: 'Mathematics',
        icon: MathIcon,
        rubrics: {
            'mathematics': {
                questions: [
                    {
                        text: 'Does the task ask you to solve non-routine problems',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task ask you to analyze strategies used to solve the problem(s)?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task ask you to develop a conceptual/theoretical argument(s) and to mathematically justify it?',
                        type: 'textarea',
                    },
                    {
                        text: 'Does the task ask you to make connections between mathematical concepts, procedures and/or strategies?',
                        type: 'textarea',
                    },
                    {
                        text: 'Does the task ask you to make mathematical representations in problem solving and/or the portrayal of solutions?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task ask that you use mathematical communication strategies in the final product?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task ask you to practice the craft of communication (research paper, podcast, documentary, etc)?',
                        type: 'y/n',
                    },
                ],
            },
        },
    },
    english: {
        name: 'English',
        icon: EnglishIcon,
        rubrics: {
            'english': {
                questions: [
                    {
                        text: 'Does the task ask you to develop a strong interpretation/point of view?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task require you to develop evidence that supports your interpretation/point of view?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task require that you consider other interpretatios?',
                        type: 'y/n',
                    },
                    {
                        text: 'What kinds of analysis and connections does the task require?',
                        type: 'textarea',
                    },
                    {
                        text: 'Does the task require you to critique the craft employed by the author in her/his work?',
                        type: 'textarea',
                    },
                    {
                        text: 'Does the task ask you to practice the craft of communication (research paper, podcast, documentary, etc)?',
                        type: 'y/n',
                    },
                ],
            },
        },
    },
    science: {
        name: 'Science',
        icon: ScienceIcon,
        rubrics: {
            'science': {
                questions: [
                    {
                        text: 'Does the task ask you to write a hypothesis statement that includes a discussion of the context and background/history?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task ask you to carefully and with detail describe the  procedure with attention paid to biases?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task ask you to collect, organize, and present relevant data that includes a mathematical analysis?',
                        type: 'textarea',
                    },
                    {
                        text: 'Does the task ask you to analyze your conclusions (particularly vis-a-vis the original question) and examine sources of error and their implications?',
                        type: 'textarea',
                    },
                    {
                        text: 'Does the task ask you to offer revisions for the experimental design?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task ask you to discuss the import of your conclusions?',
                        type: 'y/n',
                    },
                    {
                        text: 'Does the task ask you to practice the craft of the communication strategy (research paper, podcast, documentary, etc)',
                        type: 'y/n',
                    },
                ],
            },
        },
    },
};

export default disciplines;