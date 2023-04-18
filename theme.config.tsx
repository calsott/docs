import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: <span>Calsott</span>,
    project: {
        link: 'https://github.com/calsott/ci-cli'
    },
    docsRepositoryBase: 'https://github.com/calsott/docs/tree/main/pages',
    editLink: {
        text: 'Edit this page on GitHub'
    },
    footer: {
        text: 'Calsott docs'
    }
}

export default config
