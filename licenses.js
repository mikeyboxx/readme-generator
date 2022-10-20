// this is an array of license objects, containing the name of the license and a GitHub Licence badge url
const licenses = [
    {
        name: 'Apache',
        value: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
        short: `Apache 2.0 License`
    },
    {
        name: 'Boost',
        value: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
        short: `Boost Software License 1.0`
    },
    {
        name: 'BSD',
        value: `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
        short:`BSD 3-Clause License`
    },
    {
        name: 'Creative Commons',
        value: `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
        short:`CC0`
    },
    {
        name: 'Eclipse',
        value: `[[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
        short:`Eclipse Public License 1.0`
    },
    {
        name: 'GNU',
        value: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
        short:`GNU GPL v3`
    },
    {
        name: 'The Organization for Ethical Source',
        value: `[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)`,
        short:`The Hippocratic License 3.0`
    },
    {
        name: 'IBM',
        value: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
        short:`IBM Public License Version 1.0`
    },
    {
        name: 'ISC',
        value: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
        short:`ISC License (ISC)`
    },
    {
        name: 'MIT',
        value: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
        short:`The MIT License`
    },
    {
        name: 'Mozilla',
        value: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
        short:`Mozilla Public License 2.0`
    },
    {
        name: 'Open Data Commons',
        value: `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`,
        short:`Attribution License (BY)`
    },
    {
        name: 'Perl',
        value: `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
        short:`The Perl License`
    },
    {
        name: 'SIL',
        value: `![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`,
        short:`SIL Open Font License 1.1`
    },
    {
        name: 'Unlicense',
        value: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
        short:`The Unlicense`
    },
    {
        name: 'WTFPL',
        value: `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`,
        short:`The Do What the Fuck You Want to Public License`
    },
    {
        name: 'Zlib',
        value: `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`,
        short:`The zlib/libpng License`
    },
];

module.exports = {
    licenses
}