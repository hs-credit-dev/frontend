import EnglishIcon from './icons/english.svg';
import MathIcon from './icons/math.svg';
import ScienceIcon from './icons/science.svg';
import SocialStudiesIcon from './icons/social_studies.svg';

const disciplines = {
    socialStudies: {
        name: 'Social Studies',
        icon: SocialStudiesIcon,
        rubrics: {
            default: {
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
        rubric: {
            questions: [

            ],
        },
    },
    english: {
        name: 'English',
        icon: EnglishIcon,
        rubric: {
            questions: [

            ],
        },
    },
    science: {
        name: 'Science',
        icon: ScienceIcon,
        rubric: {
            questions: [

            ],
        },
    },
};

export default disciplines;