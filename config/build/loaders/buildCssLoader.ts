import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "../types/cinfig";

export function buildCssLoader(options: BuildOptions) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                }
            },

            "sass-loader",
        ],
    }
}