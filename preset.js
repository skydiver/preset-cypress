import { Preset } from 'apply';

Preset.setName('Cypress | JavaScript End to End Testing Framework');

/**
 * Install Cypress
 */
Preset.editJson('package.json')
  .withTitle('Install Cypress')
  .merge({
    scripts: {
      'cypress:open': 'cypress open',
    },
    devDependencies: {
      'babel-eslint': '^10.1.0',
      cypress: '^8.0.0',
      eslint: '^7.31.0',
      'eslint-config-airbnb': '^18.2.1',
      'eslint-config-prettier': '^8.3.0',
      'eslint-config-wesbos': '^1.0.1',
      'eslint-plugin-html': '^6.1.2',
      'eslint-plugin-import': '^2.23.4',
      'eslint-plugin-jsx-a11y': '^6.4.1',
      'eslint-plugin-prettier': '^3.4.0',
      'eslint-plugin-react': '^7.24.0',
      'eslint-plugin-react-hooks': '^4.2.0',
      faker: '^5.5.3',
      prettier: '^2.3.2',
    },
  });

/**
 * Copy project config files
 */
Preset.extract().withTitle('Copy project config files').withDots();
