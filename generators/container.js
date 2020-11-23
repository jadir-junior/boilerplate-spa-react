module.exports = (plop) => {
  plop.setGenerator('container', {
    description: 'Create a container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your container name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/containers/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/containers/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path:
          '../src/containers/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
