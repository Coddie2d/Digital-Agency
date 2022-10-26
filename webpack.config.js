const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('graceful-fs').gracefulify(require('fs'));
// const {merge} = require('webpack-merge');
// const productionConfig = merge([
//     {
//       output: {
//         // Tweak this to match your GitHub project name
//         publicPath: "/testsWeb/",
//         repo:"https://github.com/WebCoddie/testsWeb",
//       },
//     },
// ]);
module.exports = {
    mode:'development',
    stats: { 
        children: true 
        },
    output: {
            assetModuleFilename:'assets/[hash][ext][query]',
        },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template:"/src/index.html"
        }),
    ],
    module:{
        rules:[
            {
                test:/\.html$/,
                loader:'html-loader',
            },
            {
                test:/\.(sa|sc|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                    loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        'postcss-preset-env',
                                        {

                                        }
                                    ]
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ]
            },

            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'

            },
            
            

        ]
    },
    
}
