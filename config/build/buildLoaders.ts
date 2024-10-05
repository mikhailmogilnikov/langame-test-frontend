import { ModuleOptions } from 'webpack';

import { buildBabelLoader } from './babel/buildBabelLoader';

export const buildLoaders = (): ModuleOptions['rules'] => {
  const cssLoader = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  };

  const babelLoader = buildBabelLoader();

  // Для поддержки ассетов
  const assetsLoader = {
    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)$/i,
    type: 'asset/resource',
  };

  // Для преобразования svg в React-компоненты
  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [{ name: 'convertColors', params: { currentColor: true } }],
          },
        },
      },
    ],
  };

  // Возвращаем все правила
  return [cssLoader, assetsLoader, babelLoader, svgrLoader];
};
