// this is an array of README Markdown License Badge objects
const licenses = [
    {
        name: 'Apache',
        short: `Apache 2.0 License`,
        badge: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    },
    {
        name: 'Boost',
        short: `Boost Software License 1.0`,
        badge: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
    },
    {
        name: 'BSD',
        short:`BSD 3-Clause License`,
        badge: `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
    },
    {
        name: 'Creative Commons',
        short:`CC0`,
        badge: `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
    },
    {
        name: 'Eclipse',
        short:`Eclipse Public License 1.0`,
        badge: `[[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
    },
    {
        name: 'GNU',
        short:`GNU GPL v3`,
        badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    },
    {
        name: 'The Organization for Ethical Source',
        short:`The Hippocratic License 3.0`,
        badge: `[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)`,
    },
    {
        name: 'IBM',
        short:`IBM Public License Version 1.0`,
        badge: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
    },
    {
        name: 'ISC',
        short:`ISC License (ISC)`,
        badge: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
    },
    {
        name: 'MIT',
        short:`The MIT License`,
        badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    },
    {
        name: 'Mozilla',
        short:`Mozilla Public License 2.0`,
        badge: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    },
    {
        name: 'Open Data Commons',
        short:`Attribution License (BY)`,
        badge: `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`,
    },
    {
        name: 'Perl',
        short:`The Perl License`,
        badge: `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
    },
    {
        name: 'SIL',
        short:`SIL Open Font License 1.1`,
        badge: `![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`,
    },
    {
        name: 'Unlicense',
        short:`The Unlicense`,
        badge: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
    },
    {
        name: 'WTFPL',
        short:`The Do What the Fuck You Want to Public License`,
        badge: `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`,
    },
    {
        name: 'Zlib',
        short:`The zlib/libpng License`,
        badge: `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`,
    },
];

// add index to every object in the array
for(let i=0; i<licenses.length; i++)
    licenses[i].value = i;

module.exports = {
    licenses
}