module.exports = {
    '*.{js,jsx,ts,tsx}': [
        'npm run lint',
        () => 'tsc-files --noEmit',
    ],
    '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
}
