# React Boilerplate SPA

![Build Status](https://github.com/jadir-junior/boilerplate-spa-react/workflows/ci/badge.svg)

## O que tem nele?

Esse projeto foi criado pelo [Create React App](https://github.com/facebook/create-react-app) e costumizado!

<table>
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <div>
                    <a href="https://www.typescriptlang.org/">
                        <img width="60" src="https://d33wubrfki0l68.cloudfront.net/32c5cdaaf45e386876bb7ce3566e5d879cc4b4d4/fa525/img/tech/react.svg" alt="React" />
                    </a>
                </div>
                <strong>React</strong>
            </td>
            <td align="center" valign="middle">
                <div>
                    <a href="https://www.typescriptlang.org/">
                        <img width="60" src="https://d33wubrfki0l68.cloudfront.net/07af715eab99df113bc0fe926dcfb3bd5b4e465c/9a37d/img/tech/typescript.svg" alt="TypeScript" />
                    </a>
                </div>
                <strong>TypeScript</strong>
            </td>
            <td align="center" valign="middle">
                <div>
                <a href="https://styled-components.com/">
                    <img width="60" src="https://avatars2.githubusercontent.com/u/20658825?s=200&v=4" alt="Styled Components" />
                </a>
                </div>
                <strong>Styled <br/> Components</strong>
            </td>
            <td align="center" valign="middle">
                <div>
                    <a href="https://jestjs.io/">
                        <img width="60" src="https://d33wubrfki0l68.cloudfront.net/32d23faf39242160063c03836baed91954d051f0/decb4/img/tech/jest.svg" alt="Jest" />
                    </a>
                </div>
                <strong>Jest</strong>
            </td>
            <td align="center" valign="middle">
                <div>
                    <a href="https://testing-library.com/">
                        <img width="60" src="https://d33wubrfki0l68.cloudfront.net/d8252a1a8dedc92cdb69ee5c022cd91c67e3af4e/51dd8/img/tech/rtl.svg"  alt="Testing Library" />
                    </a>
                </div>
                <strong>Testing <br/> Library</strong>
            </td>
            <td align="center" valign="middle">
                <div>
                    <a href="https://storybook.js.org/">
                        <img width="60" src="https://d33wubrfki0l68.cloudfront.net/eb4093fae6d1e1d692a391773da8da72852c2988/8a1d0/img/tech/storybook.svg" alt="Storybook" />
                    </a>
                </div>
                <strong>Storybook</strong>
            </td>
             <td align="center" valign="middle">
                <div>
                    <a href="https://eslint.org/">
                        <img width="60" src="https://eslint.org/assets/img/favicon.512x512.png" alt="ESLint" />
                    </a>
                </div>
                <strong>ESLint</strong>
            </td>
             <td align="center" valign="middle">
                <div>
                    <a href="https://prettier.io/">
                        <img width="60" src="https://avatars1.githubusercontent.com/u/25822731?s=280&v=4" alt="Prettier" />
                    </a>
                </div>
                <strong>Prettier</strong>
            </td>
             <td align="center" valign="middle">
                <div>
                    <a href="https://plopjs.com/">
                        <img width="60" src="https://spectrum.imgix.net/communities/62c3818a-cb4c-4d99-840d-6cccd2e3ec87/Plop-Logo.PNG.0.899688076050545?w=256&h=256&dpr=2&auto=compress&expires=1599696000000&ixlib=js-1.3.0&s=2b0738b48980d131d9b6aba14347d3be" alt="Plop" />
                    </a>
                </div>
                <strong>Plop</strong>
            </td>
             <td align="center" valign="middle">
                <div>
                    <a href="https://plopjs.com/">
                        <img width="60" src="https://user-images.githubusercontent.com/56288/58110630-8a3c1080-7bb5-11e9-8f16-afa391dc4223.jpg" alt="Babel" />
                    </a>
                </div>
                <strong>Babel</strong>
            </td>
        </tr>
    </tbody>

</table>

## Scripts

No root do projeto você pode rodar

#### `yarn start`

Executa a aplicação em modo de desenvolvedor.
[http://localhost:3000](http://localhost:3000) para ver isso no browser.

#### `yarn test`

Executa o test runner no modo interativo e watch.
Veja esse link [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

usa o modo `--WatchAll`

#### `yarn test:coverage`

Executa todos os testes e cria um coverage dos tests

#### `yarn test:watch`

Executa os testes que ainda não foram testados em modo `--wacth`

#### `yarn test:staged`

Executa os testes em staged no `pre-commit` do [Husky](https://typicode.github.io/husky/#/)

#### `yarn generate:component Example (Nome do component)`

Criar uma scaffolder utilizando o [Plop](https://plopjs.com/) dentro da pasta `components` criando os arquivos já configurado
`index.tsx`
`Example.styles.ts`
`Example.test.tsx`
`Example.storoies.tsx`

#### `yarn generate:container Example (Nome do component)`

Criar uma scaffolder utilizando o [Plop](https://plopjs.com/) dentro da pasta `containers` criando os arquivos já configurado
`index.tsx`
`Example.styles.ts`
`Example.test.tsx`

#### `yarn storybook`

Executa a aplicação do [storybook](https://storybook.js.org/) em modo de desenvolvedor [http://localhost:6006](https://localhost:6006)

#### `yarn build`

Cria a aplicação em modo de produção na pasta `build`
