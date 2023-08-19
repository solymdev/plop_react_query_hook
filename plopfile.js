const config = plop => {
  plop.setGenerator('service', {
    description: 'Generate new Service Hoook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the service domain ?",
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'mockServer/data/{{camelCase name}}Data.json',
        templateFile: 'plop/templates/dataMockServiceTemplate.hbs',
      },
      {
        path: 'mockServer/dbLoader.js',
        pattern: /(\/\/ IMPORT JSON FILES)/g,
        template:
          "const {{camelCase name}}Data = require('./data/{{camelCase name}}Data.json');\n$1",
        type: 'modify',
      },
      {
        path: 'mockServer/dbLoader.js',
        pattern: /(\/\/ EXPORT JSON FILES)/g,
        template: '\t...{{camelCase name}}Data,\n$1',
        type: 'modify',
      },
      {
        path: 'src/services/reactQuery/queryKeys.js',
        pattern: /(\/\/ ADD NEW KEY HERE)/g,
        template: "{{camelCase name}}: '{{camelCase name}}',\n$1",
        type: 'modify',
      },
      {
        type: 'add',
        path: 'src/services/use{{properCase name}}/use{{properCase name}}.ts',
        templateFile: 'plop/templates/serviceHookTemplate.hbs',
      },
      {
        type: 'add',
        path: 'src/services/use{{properCase name}}/use{{properCase name}}.test.tsx',
        templateFile: 'plop/templates/serviceTestTSTemplate.hbs',
      },
    ],
  })
}

module.exports = config
