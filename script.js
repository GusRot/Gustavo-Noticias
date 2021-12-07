const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    keyboard: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

const navItens = [
    "Gatos",
    "GustavoR",
    "Gincana",
    "G1",
    "Games",
    "GloboTerreste",
    "GNews",
    "ggwp",
];

const swiperItens = [
    {
        content: `<iframe
        width="580"
        height="250"
        src="https://www.youtube.com/embed/_baItO4B2qM?autoplay=1&mute=1&controls=0&loop=1&playlist=_baItO4B2qM"
        title="YouTube video player"
        frameborder="0"
    ></iframe>`,
        p1: "9 a cada 10 brasileiros conseguem imaginar o som desse video.",
        p2: "100% das 9 pessoas reproduziram a música ao ler a frase acima.",
    },
    {
        content: `<img
        src="https://bn02pap001files.storage.live.com/y4mB2-5G8TR-MsxssCuftXPvP6bpq_UJ4sCXG9sTDIbxNIq61CEB3Dkys3n4q0p7mScm2yGOjr1DmwjRTeJPPCHBhtyYFAGYCuBw1f9T_r09gvByJ1ExbkoZ1ZUuNA_9Z6Bdjen6rPhdSxpkQyl7vYva8omF9W7CElufpBk8d2jZXy2zmm0gLoqepMdxCA7GwTT?width=680&height=453&cropmode=none"
        alt=""
    />`,
        p1: "Com essa dica, só não fica rico quem não quer",
        p2: "(Post apenas para assinantes)",
    },
    {
        content: `<img
        src="https://bn02pap001files.storage.live.com/y4m2EZ7038tkt5WMX35XwzlYFYCD6_-8i2ZAeEEcml37wje9T30VD7s7BYRhd3imEMsm8B8Qno3f8QebcD_A2lwXtsWgXFmhMn5vhLnCM3scpXdorKk9diJoRiVcygJa6PKO2Q1ub6OYpd8pahbQ6jVVfBt9VpDxdn2vG92UOAVYWjULs1BViuxdM8MY1gOW1Rm?width=1280&height=720&cropmode=none"
        alt=""
    />`,
        p1: `<strong>CUIDADO!!</strong> Esse site só tem
        FakeNews`,
        p2: " Não caia em FakeNews (Será isso uma FakeNews?)",
    },
];

const horizontalNews = [
    {
        img: "https://bn02pap001files.storage.live.com/y4mJi0SAh6oxneUqH3ioeOv1nbqfY0BfyJOhYvKayR8Xti7HTYi0mCb4fWkDTA3z0C5Wumz3iBmxmGhm-pAj9yuB537rRTNWrmEy9YekbnpHGLwHUHn9mwW0ZjMhp6TZ1ki9Sxzqp5o8rrKkWpDl_V-XNc1oTC4Tf7XSkw3WZ6aAiTOQnsErXCy8_0yS0Egf_dA?width=3120&height=4160&cropmode=none",
        subtitle: "Mundo Animal",
        call: "CPI deve pedir o indiciamento de filhos felinos",
        text: '"Eles estão muito mal acostumados"',
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mRw7kUUGJ-fEYsS0cJDrTjqtGQreIgnjBnY38ID5zW8JtSoEqOsfnoKP08NG5a1qMNvewMw3Vk4T9BE0hDdFCEUByC8P6elxl0c7ZN16iNF-pUEs6oTOf30KT6kbrVfLVveADV2IO9KaFmQY-7838HlZgl0dgPPNgjnw1O-7IagJftw3cJ33dozh64dTusgsQ?width=1280&height=720&cropmode=none",
        subtitle: "Geek",
        call: "Lista dos melhores animes da história",
        text: "(2min de leitura) (A lista é pequena)",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mGw-USMOGWBPrsXh8F_JBaXrAAfyH0ltgPCOOgevh5BOgeqkP-xOfHXFK-cnSH_iGqfG3ecRSQorzlcsnjErZKzPGwgbL-rDyQQo7MlIE4WTGCLrmExZ1LhExDeac_yIhOoe2MST6yixWRr-uC1BtcwChGRWSS60PJ87eaoLLceIRs3-_Xd2W9kkN2VZQ3xXG?width=3000&height=4000&cropmode=none",
        subtitle: "GoT Board Game",
        call: "Jovens passam 12hrs jogando uma partida",
        text: "Conheça o jogo que vicia as pessoas",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mfGVGiHYPvyI2TwSB3HIY9B4MEKulxtX7byhTNDLjHd5hELnezxyceAqGXatiCjeTvdqD5XN6cupqDO1Fr1R1egrLWBYXSn_u-nBH-xatRaY936agOa6GRZAv6aR9aQRw_GBeqjL1TqtbtEnpVKK4sQC_emQJ_AKhuFjIIq_f0flvLhJ8wkx7P0x4noVUFk_l?width=1920&height=1080&cropmode=none",
        subtitle: "Old School",
        call: "O Rock está vivo?",
        text: "Conheça as bandas da atualidade que fazem jus ao estilo musical",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4m1nYo6gFco0iMJU-HqGboqe2tiCErGlBzYZAjQnEWXa5PFpJvO7iU_m9VbA7u_RU_bJsLCGsmcwm06tu1kS2igAe7gaaWLR9qPI144bTj496o2wkgfFMEHSVZGoTBrjuAiNIwrfc24Ku2wIsbQoNM9Jvapg6bbmtry80IGewyhW_X3oHUkL_sgkvc-A5YN9ru?width=1280&height=720&cropmode=none",
        subtitle: "Cleiton",
        call: "Você não vai acreditar nisso?",
        text: 'Conhecido como, "O Bom da Guerra" traz inovações...',
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mMMXmJ-AiV1m890tDZ8AOKB1B2machr9J9fulc11Z5ZH_wq0m3F1D6VR3T4UmtCaJBlveE6tATT5sSu7_fE_miUE6za4a1_G7FmzxNTOCkqjprw6HQhQaXVIa7p1CAm1PoLhu31DSACUNdoUQcocbMA5m696my18Sl8mliFvNGcFTm9VTZNJTuDn8Xahr4K2F?width=3000&height=4000&cropmode=none",
        subtitle: "Gatos",
        call: "10 Curiosidades sobre os gatos",
        text: "Conheça mais sobre os nossos amigos felinos",
    },
];

const verticalNews = [
    {
        img: "https://bn02pap001files.storage.live.com/y4mLp3iV9nrE5578bMR7FD5TEDDZIDYkA6flYiwoZZ1FVrULx2hkcnHDF3jhLnsWOotCi0NII8SkGwXmkb6XzmrbLHL99GxhVNmmlO49GMvyKtmGIxxXstf5G0HdntUySkVPakAqkY1rPGftlgWPcnpeGTHHjN8B79O9E1Rhm-YZjnACdcKgXWGwgSCxPo-7cMd?width=1600&height=1200&cropmode=none",
        subtitle: "O Globo",
        call: "Veja o horóscopo da semana",
        text: "Áries está próximo de Netuno, ou seja, Plutão não é um Planeta",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mQgWq8MV0cyLrfLv-Yw6m0or782LqrkFf-ragbhFcV_iRO03ALllZ82ZbYUXGNEZGG-4RZO0dY1HEbx7MftNo2LYKuIRAZ_ssEMG_TfjPOBRoZbE_-ITveSKljnHsEQDJWW0VN2CvGdbh2PpfD5DTBsTb2BJc5_6GUe7BEwZx1TKlKssTWO7fFyWOPyzPxLI3?width=5760&height=3840&cropmode=none",
        subtitle: "Stormtropper",
        call: "Foi revelado o motivo de errarem os tiros",
        text: "",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mEusn_WkeeR7sTM8VaAaf17uJQwM0BwltU_ebe02soWo2fzrKdOtsuMujtKE6hIzjviIFk9d9TNX_trnTMxHGnBn-jrdkI-k9cp0xcL_N2E88mi1S8F4p5uMw9jo3WBUM-4XLbfTGnncN_SFNQipgCfAtnCyx1oxDagPDQ7p8Wqoejt_7YrXHBxXjY2XLTLzq?width=3000&height=4000&cropmode=none",
        subtitle: "Gatos",
        call: "Banho de sol",
        text: "Curioso caso de gato que se seca com as louças",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mrc8d49TMswerG8zD2L2nEwSYsytZqPuE61DuWm4oUKkobFWmXfhtd-qQK0DSvi44-XnPv2ZV3FbbniYUeN6CKneeFmcCjsbmkAU3NHocVxdfNGlFPsR6AMAI4unfjX606O6dxF4g_MMHjTQP0xKJETid7tNrr5oN-t0E3lGimC6cCVIAAgPfSv3lc3EWdJHU?width=1920&height=1080&cropmode=none",
        subtitle: "WoW 2",
        call: "Devs desistem do WoW",
        text: "Apenas um novo jogo pode salvar a franquia",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mDkC57MdgqBa-UXwxFjJoLSVDDNUp7t2KCLLxou4pXLCXwn6KZcw9zH_6TIYw5JCpscqbXAZeD77ippd09I9VjSCOJpJVmzbAN2ME3fICh0z51wwhlMBxNAH4vQeQNNAKrugFfu0PUHtFEnK_xHJtopAK1YQTIRwnY_QclaH_LAPR7tc4F2TIRV70ykT3UWc3?width=1536&height=644&cropmode=none",
        subtitle: "Filmes",
        call: "Lista dos melhores filmes da história",
        text: `Star Wars fora da lista <br />
        "Foram muitos filmes ruins, diz diretor"`,
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mDsjTgaykRWkZNN0LG2xIqoLavtucSoNtrr0rNXWJA071WrqahFsEzvRa91RAiiRveFrMAAjXY6VmXnNpp8Jr8i0cK3RbEPnyS-Ftzq4AyZy_Jzuc4-JbE6rf3EmFRgzUTu0BJxcXQ2z_tEueIS5WJWxJv0tp587kCJNtep_hCeT5PhQO4O8bLR4MKJh6fSJG?width=3000&height=4000&cropmode=none",
        subtitle: "Nos Tempos do Egito",
        call: "Gatos são tratados como reis",
        text: "Fazem o que querem, na hora que querem",
    },
];

window.onload = function () {
    const nav = document.getElementById("nav");
    for (let i = 0; i < navItens.length; i++) {
        nav.innerHTML += ` <a href="#" target="blank"><h5 class="nav${i}">${navItens[i]}</h5></a>
        <a href="#" target="blank"`;
    }

    const swiper = document.getElementById("swiper");
    for (let i = 0; i < swiperItens.length; i++) {
        swiper.innerHTML += ` <div class="sessao-titulo swiper-slide">
        <div class="slide-container">
            ${swiperItens[i].content}
        </div>
        <p class="subtitulo">
        ${swiperItens[i].p1}
        </p>
        <p class="subtitulo">
        ${swiperItens[i].p2}
        </p>
    </div> `;
    }

    const lineNews = document.getElementById("noticias-horizontal");
    for (let i = 0; i < horizontalNews.length; i++) {
        lineNews.innerHTML += `<div class="caixa-noticias">
        <a href="#" target="blank">
            <img
                class="imagens1"
                src="${horizontalNews[i].img}"
            />
            <h4 class="subtitulo-imagem">${horizontalNews[i].subtitle}</h4>
            <h2 class="titulo-imagem">
            ${horizontalNews[i].call}
            </h2>
            <p class="p-imagem">
            ${horizontalNews[i].text}
            </p>
        </a>
    </div>
        `;
    }

    const columnNews = document.getElementById("noticias-vertical");
    for (let i = 0; i < verticalNews.length; i++) {
        columnNews.innerHTML += `<div class="caixa2-noticias">
        <a href="#" target="blank">
            <img
                class="imagens2"
                src="${verticalNews[i].img}"
            />
            <h4 class="subtitulo-imagem">${verticalNews[i].subtitle}</h4>
            <h2 class="titulo-imagem">
            ${verticalNews[i].call}
            </h2>
            <p class="p-imagem">
            ${verticalNews[i].text}
            </p>
        </a>
    </div>
        `;
        if (i % 2 === 0) {
            columnNews.innerHTML += `<div class="linha-vertical"></div>`;
        }
    }
};
