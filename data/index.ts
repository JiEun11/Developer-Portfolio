export interface Project {
    id: number;
    titleKey: string;
    roleKey: string;
    periodKey: string;
    descriptionPointsKeys: string[];
    technologies: string[];
}

export interface CompanyExperience {
    id: number;
    companyKey: string;
    projects: Project[];
}

export interface SimpleExperience {
    id: number;
    companyKey: string;
    roleKey: string;
    subtitleKey?: string;
    periodKey: string;
    descriptionPointsKeys: string[];
}

export const enDeExperiencesData: SimpleExperience[] = [
    {
        id: 1,
        companyKey: "experience.goorm.company",
        roleKey: "experience.goorm.role",
        subtitleKey: "experience.goorm.subtitle",
        periodKey: "experience.goorm.period",
        descriptionPointsKeys: [
            "experience.goorm.desc.1",
            "experience.goorm.desc.2",
            "experience.goorm.desc.3",
            "experience.goorm.desc.4",
            "experience.goorm.desc.5",
        ],
    },
    {
        id: 2,
        companyKey: "experience.posco.company",
        roleKey: "experience.posco.role",
        periodKey: "experience.posco.period",
        descriptionPointsKeys: [
            "experience.posco.desc.1",
            "experience.posco.desc.2",
            "experience.posco.desc.3",
            "experience.posco.desc.4",
            "experience.posco.desc.5",
        ],
    },
];


export const companyExperiencesData: CompanyExperience[] = [
    {
        id: 1,
        companyKey: "experience.goorm.company_ko",
        projects: [
            {
                id: 101,
                titleKey: "experience.goorm.aisa.title_ko",
                roleKey: "experience.goorm.aisa.role_ko",
                periodKey: "experience.goorm.aisa.period_ko",
                descriptionPointsKeys: [
                    "experience.goorm.aisa.desc.1_ko",
                    "experience.goorm.aisa.desc.2_ko",
                    "experience.goorm.aisa.desc.3_ko",
                    "experience.goorm.aisa.desc.4_ko",
                    "experience.goorm.aisa.desc.5_ko",
                ],
                technologies: ["React.js", "react-query", "Context-API", "Node.js", "REST API", "MongoDB", "gpt-tokenizer", "Git"]
            },
            {
                id: 102,
                titleKey: "experience.goorm.qa.title_ko",
                roleKey: "experience.goorm.qa.role_ko",
                periodKey: "experience.goorm.qa.period_ko",
                descriptionPointsKeys: [
                    "experience.goorm.qa.desc.1_ko",
                    "experience.goorm.qa.desc.2_ko",
                    "experience.goorm.qa.desc.3_ko",
                ],
                technologies: ["React.js", "Node.js", "MongoDB", "Git", "Figma"]
            },
            {
                id: 103,
                titleKey: "experience.goorm.blog.title_ko",
                roleKey: "experience.goorm.blog.role_ko",
                periodKey: "experience.goorm.blog.period_ko",
                descriptionPointsKeys: [
                    "experience.goorm.blog.desc.1_ko",
                    "experience.goorm.blog.desc.2_ko",
                    "experience.goorm.blog.desc.3_ko",
                ],
                technologies: ["Amazon Chime SDK", "Technical Writing"]
            },
            {
                id: 104,
                titleKey: "experience.goorm.gsip.title_ko",
                roleKey: "experience.goorm.gsip.role_ko",
                periodKey: "experience.goorm.gsip.period_ko",
                descriptionPointsKeys: [
                    "experience.goorm.gsip.desc.1_ko",
                    "experience.goorm.gsip.desc.2_ko",
                    "experience.goorm.gsip.desc.3_ko",
                    "experience.goorm.gsip.desc.4_ko",
                    "experience.goorm.gsip.desc.5_ko",
                ],
                technologies: ["React.js", "react-query", "Context API", "Node.js", "Express.js", "MongoDB", "Git", "Figma"]
            },
            {
                id: 105,
                titleKey: "experience.goorm.aidt.title_ko",
                roleKey: "experience.goorm.aidt.role_ko",
                periodKey: "experience.goorm.aidt.period_ko",
                descriptionPointsKeys: [
                    "experience.goorm.aidt.desc.1_ko",
                    "experience.goorm.aidt.desc.2_ko",
                    "experience.goorm.aidt.desc.3_ko",
                    "experience.goorm.aidt.desc.4_ko",
                    "experience.goorm.aidt.desc.5_ko",
                ],
                technologies: ["React.js", "react-query", "Context API", "Node.js", "Express.js", "MongoDB", "Git", "Figma"]
            },
            {
                id: 106,
                titleKey: "experience.goorm.codepro.title_ko",
                roleKey: "experience.goorm.codepro.role_ko",
                periodKey: "experience.goorm.codepro.period_ko",
                descriptionPointsKeys: [
                    "experience.goorm.codepro.desc.1_ko",
                    "experience.goorm.codepro.desc.2_ko",
                    "experience.goorm.codepro.desc.3_ko",
                    "experience.goorm.codepro.desc.4_ko",
                    "experience.goorm.codepro.desc.5_ko",
                ],
                technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git", "Elastic Search", "Figma"]
            }
        ]
    },
    {
        id: 2,
        companyKey: "experience.posco.company_ko",
        projects: [
            {
                id: 201,
                titleKey: "experience.posco.erp.title_ko",
                roleKey: "experience.posco.erp.role_ko",
                periodKey: "experience.posco.erp.period_ko",
                descriptionPointsKeys: [
                    "experience.posco.erp.desc.1_ko",
                    "experience.posco.erp.desc.2_ko",
                    "experience.posco.erp.desc.3_ko",
                    "experience.posco.erp.desc.4_ko",
                    "experience.posco.erp.desc.5_ko",
                ],
                technologies: ["React.js", "Spring Boot", "JPA", "Oracle", "PostgreSQL", "Git"]
            },
            {
                id: 202,
                titleKey: "experience.posco.ai.title_ko",
                roleKey: "experience.posco.ai.role_ko",
                periodKey: "experience.posco.ai.period_ko",
                descriptionPointsKeys: [
                    "experience.posco.ai.desc.1_ko",
                    "experience.posco.ai.desc.2_ko",
                    "experience.posco.ai.desc.3_ko",
                    "experience.posco.ai.desc.4_ko",
                ],
                technologies: ["jQuery", "Spring Boot", "Python", "Pandas", "AWS SageMaker", "Lambda", "PostgreSQL", "Git", "SVN"]
            },
        ]
    },
     {
        id: 3,
        companyKey: "experience.posco_intern.company_ko",
        projects: [
            {
                id: 301,
                titleKey: "experience.posco_intern.system.title_ko",
                roleKey: "experience.posco_intern.system.role_ko",
                periodKey: "experience.posco_intern.system.period_ko",
                descriptionPointsKeys: [
                    "experience.posco_intern.system.desc.1_ko",
                    "experience.posco_intern.system.desc.2_ko",
                    "experience.posco_intern.system.desc.3_ko",
                    "experience.posco_intern.system.desc.4_ko",
                    "experience.posco_intern.system.desc.5_ko",
                ],
                technologies: ["React.js", "Spring Boot", "PostgreSQL", "GCP", "Jenkins", "Git"]
            },
        ]
    }
];