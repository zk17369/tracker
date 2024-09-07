import { fileURLToPath } from "url"
import path from "path"
import ts from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'


// 获取当前模块的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export default [
    {
        input: './src/core/index.ts',
        output: [
            {
                file:path.resolve(__dirname, './dist/index.esm.js'),
                format: 'es'
            },
            {
                file:path.resolve(__dirname, './dist/index.cjs.js'),
                format: 'cjs'
            },
            {
                file:path.resolve(__dirname, './dist/index.js'),
                format: 'umd',
                name: 'tracker'
            },
        
        ],
        Plugins: [
            ts()
        ]
    },
    {
        input: './src/core/index.ts',
        output: [
            {
                file:path.resolve(__dirname, './dist/index.d.ts'),
                format: 'es'
            },
        ],
        Plugins: [
            dts()
        ]
    }
]