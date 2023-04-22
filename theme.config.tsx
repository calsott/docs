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
    },
    head: (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:title" content="Calsott" />
        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Calsott'
        }
    }
}

export default config
