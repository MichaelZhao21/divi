import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { useRouter } from 'next/dist/client/router';

function Logo(props) {
    const router = useRouter();

    const handleClick = () => {
        router.push('/input-page');
    };

    return (
        <SvgIcon
            {...props}
            width="153"
            height="171"
            viewBox="0 0 153 171"
            onClick={handleClick}
        >
            <path
                d="M101.5 68.75H50.75V119.5H101.5V68.75ZM84.5833 102.583H67.6667V85.6667H84.5833V102.583ZM152.25 85.6667V68.75H135.333V34.9167H101.5L101.432 22.9328C92.9739 22.9328 84.5833 22.9308 84.5833 22.9308V34.9167H67.6667V23.0938H50.75V34.9167H16.9167V68.75H0V85.6667H16.9167V102.583H0V119.5H16.9167V153.333H50.75V170.25H67.6667V153.333H84.5833V170.25H101.5V153.333H135.333V119.5H152.25V102.583H135.333V85.6667H152.25ZM118.417 136.417H33.8333V51.8333H118.417V136.417Z"
                fill="url(#paint0_linear_10_25)"
            />
            <path
                d="M76.125 0.081665C50.625 0.081665 50.7854 21.8317 50.7854 21.8317L50.7854 29.0817H67.625V23.6442C67.625 23.6442 67.625 16.3942 76.125 16.3942C84.625 16.3942 84.625 23.6442 84.625 23.6442V29.0817H101.438V21.3718C101.438 21.3718 101.625 0.081665 76.125 0.081665Z"
                fill="url(#paint1_linear_10_25)"
            />
            <circle cx="76" cy="94" r="7" fill="#46A6EB" />
            <defs>
                <linearGradient
                    id="paint0_linear_10_25"
                    x1="76.125"
                    y1="18"
                    x2="76.125"
                    y2="170.25"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#86CBFC" />
                    <stop offset="1" stopColor="#017FDA" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_10_25"
                    x1="76.125"
                    y1="0.081665"
                    x2="76.125"
                    y2="29.0817"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B7E1FF" />
                    <stop offset="1" stopColor="#7BC4F9" />
                </linearGradient>
            </defs>
        </SvgIcon>
    );
}

export default Logo;
