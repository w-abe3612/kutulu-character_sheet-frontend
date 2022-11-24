import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
    const d = new Date();
    let displayYear = 2022 === d.getFullYear()?'2022':'2022' + '-' + d.getFullYear()

    return (
        <footer className='m-footer' >
            <div className='footer-bottom'>キャラ箱プロジェクト {displayYear}</div>
        </footer>
    )
}

export default Footer;

