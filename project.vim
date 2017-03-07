let g:neomake_standard_maker = {
    \ 'exe': $PWD .'/node_modules/.bin/standard',
    \ 'args' : ['%'],
    \ 'errorformat': '%f:%l:%c: %m'
    \ }

let g:neomake_javascript_enabled_makers = ['standard']
"let g:neomake_jsx_enabled_makers = ['standard']
