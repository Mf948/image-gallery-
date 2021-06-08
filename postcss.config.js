const tailwindcss = require('tailwindcss')

module.exports ={
 plugigns:[
     tailwindcss("./tailwind.js"),
     require('autoprefixer')
 ]
}