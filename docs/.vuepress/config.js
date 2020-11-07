module.exports = {
    title: 'The Static Site Table of Contents',
    description: "A consolidated list of Documentation Websites available in the Scott Lare github Repositories.",
    base: "/githubpages/",
    lineNumbers: true,
    themeConfig: {
        sidebarDepth: 3,
        repo: 'https://github.com/ScottLare/githubpages/',
        docsRepo: 'https://github.com/ScottLare/githubpages/',
        docsDir: 'docs',
        lastUpdated: 'Last Updated',
        editLinks: true,
        editLinkText: 'Edit this page and help us to improve the content!',
        smoothScroll: true,
        nav: [{
            text: "Home",
            link: "/",
            position: "left",
            external: false
        }, ],
        sidebar: [{            
                    title: 'Overview',
                    children: [{title: 'Overview',children: ['/development/overview'],},
                ]},
                {
                    title: 'Project Management',
                    children: [{
                        title: 'Project Plan',
                        children: ['/projectplan/projectplan_1']
                    },
                ]},
                {
                    title: 'Solutions',
                    children: [{
                        title: 'Developer Challenges',
                        children: ['/development/challenge1']
                    },
                ]},
                {
                    title: 'Tools',
                    children: [{
                        title: 'Deploy CI/CD using Travis',
                        children: ['/tools/cicd']
                    },
                ]},
                {
                    title: 'Resources',
                    children: [{
                        title: 'What is IPFS?',
                        children: ['/resources/ipfs']
                    },
                ]},
                {
                    title: 'Presentations',
                    children: [{
                        title: 'CLI Code Gen Presentation',
                        children: ['/presentation/clicodegenpresentation'],
                    },
                ]},
                {
                    title: 'Videos',
                    children: [{
                        title: 'CLI Code Gen Video',
                        children: ['/videos/clicodegenvid'],
                    },
                ]},
                {
                    title: 'Training',
                    children: [{
                        title: 'golang',
                        children: ['/training/buildwebserver'],
                    },
                ]},
        ]},
}