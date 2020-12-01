export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc6432c8400cb29a2eb4603',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qo8wihk9',
                  apiId: '5bc451a1-9ae9-4556-98b1-e7a22f5dd950'
                },
                {
                  buildHookId: '5fc6432c8400cb262deb4888',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eoqwtuj8',
                  apiId: 'e0ca0a8f-c0a9-40de-a55f-2b451ec8fb06'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joetannenbaum/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eoqwtuj8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
