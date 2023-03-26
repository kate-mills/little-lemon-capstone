const HeroTitle = ({color1="#F5F5F5", color2="#F5F5F5"}) => {
  return (
    <svg
    style={{maxWidth: '100%'}}
      width="280"
      height="119"
      viewBox="0 0 280 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5234 105.332C8.1901 105.332 5.63151 104.505 3.84766 102.852C2.0638 101.198 1.17188 98.8281 1.17188 95.7422C1.17188 93.6198 1.58203 91.7839 2.40234 90.2344C3.23568 88.6719 4.41406 87.4674 5.9375 86.6211C7.46094 85.7617 9.25781 85.332 11.3281 85.332C12.3958 85.332 13.4375 85.4427 14.4531 85.6641C15.4688 85.8854 16.3021 86.1849 16.9531 86.5625C17.2005 88.1901 17.2721 89.7917 17.168 91.3672H15.5664L13.6328 86.9922L15.4297 88.457C14.0365 87.7409 12.5521 87.3828 10.9766 87.3828C7.26562 87.3828 5.41016 89.9349 5.41016 95.0391C5.41016 100.534 7.55859 103.281 11.8555 103.281C13.4831 103.281 14.9674 102.917 16.3086 102.188L16.2109 103.496L13.5547 103.516L16.0156 98.9844H17.6953C17.7214 100.586 17.5065 102.285 17.0508 104.082C16.3867 104.473 15.5599 104.779 14.5703 105C13.5807 105.221 12.5651 105.332 11.5234 105.332ZM21.6211 104.883V84.8047L25.1758 85.3711V104.883H21.6211ZM30.6445 104.883V95.0586C30.6445 93.2747 29.8047 92.3828 28.125 92.3828C26.7969 92.3828 25.4427 92.9297 24.0625 94.0234L23.6719 92.9883C25.3125 90.957 27.3568 89.9414 29.8047 89.9414C31.224 89.9414 32.3112 90.319 33.0664 91.0742C33.8216 91.8164 34.1992 92.8841 34.1992 94.2773V104.883H30.6445ZM19.7461 105L19.8633 103.691C20.2279 103.509 20.599 103.359 20.9766 103.242C21.3542 103.125 21.7318 103.021 22.1094 102.93L21.6211 104.512V101.719H25.1758V104.512L24.7656 103.086L27.1875 103.652L27.0898 105H19.7461ZM29.0625 105L29.1797 103.613C29.4531 103.47 29.7461 103.346 30.0586 103.242C30.3841 103.125 30.7357 103.021 31.1133 102.93L30.6445 104.512V101.719H34.1992V104.512L33.7695 103.086L36.1523 103.652L36.0547 105H29.0625ZM21.6211 87.5V85.0586L22.0312 85.9766L19.3945 84.8828L19.4922 83.9453C20.7682 83.4896 22.2266 83.2292 23.8672 83.1641H25.1758V86.5234L21.6211 87.5ZM39.9805 104.883V91.6602L43.5352 91.2891V104.883H39.9805ZM39.9805 95.0195V92.5195L40.5469 93.5352L37.8516 92.168L37.9492 91.1914C38.5612 90.918 39.2643 90.6901 40.0586 90.5078C40.8529 90.3125 41.6862 90.1758 42.5586 90.0977H43.5352V93.2031L39.9805 95.0195ZM37.9883 105L38.1055 103.691C38.431 103.535 38.7891 103.398 39.1797 103.281C39.5833 103.151 40.0195 103.034 40.4883 102.93L39.9805 104.512V101.719H43.5352V104.512L43.1055 103.086L45.625 103.652L45.5078 105H37.9883ZM41.4648 87.8516C40.7747 87.8516 40.2279 87.6562 39.8242 87.2656C39.4206 86.862 39.2188 86.3281 39.2188 85.6641C39.2188 85 39.4206 84.4727 39.8242 84.082C40.2279 83.6914 40.7747 83.4961 41.4648 83.4961C42.1549 83.4961 42.7018 83.6914 43.1055 84.082C43.5091 84.4727 43.7109 85 43.7109 85.6641C43.7109 86.3281 43.5091 86.862 43.1055 87.2656C42.7018 87.6562 42.1549 87.8516 41.4648 87.8516ZM54.8242 105.312C52.4544 105.312 50.6315 104.674 49.3555 103.398C48.0924 102.122 47.4609 100.299 47.4609 97.9297C47.4609 95.4818 48.1185 93.5352 49.4336 92.0898C50.7487 90.6445 52.5195 89.9219 54.7461 89.9219C56.3867 89.9219 57.8516 90.2865 59.1406 91.0156C59.2578 91.5495 59.3424 92.1484 59.3945 92.8125C59.4466 93.4635 59.4466 94.1341 59.3945 94.8242H57.6562L55.9961 91.4648L57.6172 92.8711C57.1224 92.5716 56.5951 92.3372 56.0352 92.168C55.4883 91.9987 54.987 91.9141 54.5312 91.9141C53.5286 91.9141 52.7539 92.3568 52.207 93.2422C51.6602 94.1276 51.3867 95.4102 51.3867 97.0898C51.3867 100.905 52.9427 102.812 56.0547 102.812C57.3047 102.812 58.5742 102.572 59.8633 102.09L59.707 104.121C58.418 104.915 56.7904 105.312 54.8242 105.312ZM69.7266 102.891C69.7266 101.81 69.7396 100.71 69.7656 99.5898C69.7917 98.457 69.8047 97.3958 69.8047 96.4062V94.707C69.8047 92.8581 68.9323 91.9336 67.1875 91.9336C66.0547 91.9336 64.987 92.3112 63.9844 93.0664L62.5 94.707C62.4609 93.5091 62.526 92.4219 62.6953 91.4453C64.5052 90.4427 66.4453 89.9414 68.5156 89.9414C71.7188 89.9414 73.3203 91.3997 73.3203 94.3164C73.3203 94.681 73.3138 95.2344 73.3008 95.9766C73.2878 96.7057 73.2747 97.5 73.2617 98.3594C73.2487 99.2057 73.2357 100 73.2227 100.742C73.2096 101.471 73.2031 102.031 73.2031 102.422L69.7266 102.891ZM62.5 94.707L62.7539 92.4609L65.9961 91.3477L64.3164 94.707H62.5ZM65.7422 105.293C64.4661 105.293 63.4505 104.935 62.6953 104.219C61.9531 103.49 61.582 102.513 61.582 101.289C61.582 98.6719 63.4961 96.9596 67.3242 96.1523L70.625 95.4492L70.8789 97.2656L68.0859 97.6172C67.0703 97.7344 66.3346 98.0143 65.8789 98.457C65.4232 98.8867 65.1953 99.5378 65.1953 100.41C65.1953 102.09 65.9049 102.93 67.3242 102.93C68.3138 102.93 69.4987 102.441 70.8789 101.465L71.2305 102.285C69.6289 104.29 67.7995 105.293 65.7422 105.293ZM70.625 105.078L69.8633 102.441L73.2031 101.562V103.809L72.6758 102.871L75.0391 103.555L74.9219 104.844C73.8281 105.026 72.3958 105.104 70.625 105.078ZM83.0859 100.352C81.263 100.352 79.8112 99.8828 78.7305 98.9453C77.6497 98.0078 77.1094 96.7513 77.1094 95.1758C77.1094 93.5742 77.6497 92.3047 78.7305 91.3672C79.8242 90.4167 81.2891 89.9414 83.125 89.9414C84.1406 89.9414 85.0977 90.1693 85.9961 90.625C86.9076 91.0677 87.6497 91.6797 88.2227 92.4609C88.7956 93.2292 89.082 94.1211 89.082 95.1367C89.082 96.7253 88.5417 97.9948 87.4609 98.9453C86.3802 99.8828 84.9219 100.352 83.0859 100.352ZM83.3203 98.5547C84.8047 98.5547 85.5469 97.5326 85.5469 95.4883C85.5469 92.9883 84.6549 91.7383 82.8711 91.7383C81.3867 91.7383 80.6445 92.7669 80.6445 94.8242C80.6445 96.0221 80.8724 96.9466 81.3281 97.5977C81.7969 98.2357 82.4609 98.5547 83.3203 98.5547ZM90.6641 92.4219L86.0742 92.1875L83.125 89.9414C83.737 89.9414 84.2188 89.9805 84.5703 90.0586C84.9349 90.1237 85.2669 90.1953 85.5664 90.2734C85.8789 90.3516 86.263 90.3906 86.7188 90.3906C87.0443 90.3906 87.5781 90.3711 88.3203 90.332C89.0625 90.2799 89.9154 90.2083 90.8789 90.1172L90.6641 92.4219ZM82.832 111.836C80.8919 111.836 79.3424 111.478 78.1836 110.762C77.0378 110.059 76.4648 109.108 76.4648 107.91C76.4648 106.374 77.513 105.169 79.6094 104.297L80.7422 104.922C79.8958 105.599 79.4727 106.38 79.4727 107.266C79.4727 108.125 79.8177 108.783 80.5078 109.238C81.1979 109.707 82.1875 109.941 83.4766 109.941C84.8307 109.941 85.9049 109.694 86.6992 109.199C87.5065 108.704 87.9102 108.034 87.9102 107.188C87.9102 106.354 87.3568 105.938 86.25 105.938H81.6992C80.5534 105.938 79.668 105.677 79.043 105.156C78.431 104.635 78.125 103.893 78.125 102.93C78.125 101.341 79.0495 100.085 80.8984 99.1602L82.207 99.375C81.2435 100.091 80.7617 100.853 80.7617 101.66C80.7617 102.48 81.3151 102.891 82.4219 102.891H86.9727C88.3268 102.891 89.3685 103.177 90.0977 103.75C90.8268 104.31 91.1914 105.124 91.1914 106.191C91.1914 107.285 90.8333 108.255 90.1172 109.102C89.401 109.948 88.4115 110.612 87.1484 111.094C85.8984 111.589 84.4596 111.836 82.832 111.836ZM99.5898 105.352C97.3503 105.352 95.5664 104.661 94.2383 103.281C92.9232 101.888 92.2656 100.02 92.2656 97.6758C92.2656 95.306 92.9297 93.4245 94.2578 92.0312C95.599 90.625 97.3958 89.9219 99.6484 89.9219C101.888 89.9219 103.665 90.6185 104.98 92.0117C106.296 93.3919 106.953 95.2604 106.953 97.6172C106.953 99.987 106.289 101.868 104.961 103.262C103.633 104.655 101.842 105.352 99.5898 105.352ZM99.9219 103.34C101.992 103.34 103.027 101.608 103.027 98.1445C103.027 96.1523 102.702 94.6224 102.051 93.5547C101.413 92.474 100.495 91.9336 99.2969 91.9336C97.2266 91.9336 96.1914 93.6654 96.1914 97.1289C96.1914 99.1211 96.5104 100.658 97.1484 101.738C97.7995 102.806 98.724 103.34 99.9219 103.34Z"
        fill={color2}
      />
      <path
        d="M5.03125 53.5312V23.5H10.9688V53.5312H5.03125ZM8.0625 54V50.5938H23.7812L25 54H8.0625ZM25 54L19.5 52.0625L24.0938 43.5625H26.4062C26.4062 47.2708 25.9375 50.75 25 54ZM15.5625 23.0625L15.375 25.2812C14.7083 25.5104 13.9167 25.7292 13 25.9375C12.1042 26.125 11.1667 26.2917 10.1875 26.4375L10.9688 23.9062V28.4375H5.03125V23.9062L5.75 26.25L1.59375 25.3438L1.78125 23.0625H15.5625ZM1.71875 54L1.90625 51.7812C2.94792 51.3438 4.26042 50.9375 5.84375 50.5625L5.03125 53.1562V48.625H10.9688V53.1562L10.2812 50.8125L14.4375 51.7188L14.25 54H1.71875ZM32.5312 53.8125V32.6562L38.2188 32.0625V53.8125H32.5312ZM32.5312 38.0312V34.0312L33.4375 35.6562L29.125 33.4688L29.2812 31.9062C30.2604 31.4688 31.3854 31.1042 32.6562 30.8125C33.9271 30.5 35.2604 30.2812 36.6562 30.1562H38.2188V35.125L32.5312 38.0312ZM29.3438 54L29.5312 51.9062C30.0521 51.6562 30.625 51.4375 31.25 51.25C31.8958 51.0417 32.5938 50.8542 33.3438 50.6875L32.5312 53.2188V48.75H38.2188V53.2188L37.5312 50.9375L41.5625 51.8438L41.375 54H29.3438ZM34.9062 26.5625C33.8021 26.5625 32.9271 26.25 32.2812 25.625C31.6354 24.9792 31.3125 24.125 31.3125 23.0625C31.3125 22 31.6354 21.1562 32.2812 20.5312C32.9271 19.9062 33.8021 19.5938 34.9062 19.5938C36.0104 19.5938 36.8854 19.9062 37.5312 20.5312C38.1771 21.1562 38.5 22 38.5 23.0625C38.5 24.125 38.1771 24.9792 37.5312 25.625C36.8854 26.25 36.0104 26.5625 34.9062 26.5625ZM53.6875 54.375C49.1875 54.375 46.9375 52.1771 46.9375 47.7812V32.6562L47.2188 30.4375L48.5938 24.4688H52.625V46.8438C52.625 48.1771 52.875 49.1458 53.375 49.75C53.875 50.3542 54.6875 50.6562 55.8125 50.6562C56.75 50.6562 57.9479 50.4792 59.4062 50.125L59.1875 53.0938C57.6667 53.9479 55.8333 54.375 53.6875 54.375ZM43.1875 33.7188L43.4062 31.125C44.5521 30.7917 45.8229 30.5625 47.2188 30.4375H59.25L59 33.7188H43.1875ZM71.25 54.375C66.75 54.375 64.5 52.1771 64.5 47.7812V32.6562L64.7812 30.4375L66.1562 24.4688H70.1875V46.8438C70.1875 48.1771 70.4375 49.1458 70.9375 49.75C71.4375 50.3542 72.25 50.6562 73.375 50.6562C74.3125 50.6562 75.5104 50.4792 76.9688 50.125L76.75 53.0938C75.2292 53.9479 73.3958 54.375 71.25 54.375ZM60.75 33.7188L60.9688 31.125C62.1146 30.7917 63.3854 30.5625 64.7812 30.4375H76.8125L76.5625 33.7188H60.75ZM82.8438 53.8125V21.6875L88.5312 22.5938V53.8125H82.8438ZM79.4688 54L79.6562 51.9062C80.1979 51.6771 80.7917 51.4688 81.4375 51.2812C82.1042 51.0729 82.8333 50.875 83.625 50.6875L82.8438 53.2188V48.75H88.5312V53.2188L87.875 50.9375L92.0625 51.8438L91.875 54H79.4688ZM82.8438 26V22.0938L83.5 23.5625L79.2812 21.8125L79.4375 20.3125C81.4792 19.5833 83.8125 19.1667 86.4375 19.0625H88.5312V24.4375L82.8438 26ZM107.312 54.5C103.396 54.5 100.385 53.4688 98.2812 51.4062C96.1771 49.3438 95.125 46.3958 95.125 42.5625C95.125 38.6667 96.1562 35.5833 98.2188 33.3125C100.302 31.0208 103.104 29.875 106.625 29.875C109.792 29.875 112.229 30.8438 113.938 32.7812C115.646 34.6979 116.5 37.4583 116.5 41.0625C116.5 41.375 116.49 41.7188 116.469 42.0938C116.448 42.4479 116.417 42.7708 116.375 43.0625L110.438 41.9062C110.438 38.7604 110.083 36.5 109.375 35.125C108.667 33.7292 107.51 33.0312 105.906 33.0312C102.802 33.0312 101.25 35.5521 101.25 40.5938C101.25 47.1979 103.917 50.5 109.25 50.5C111.333 50.5 113.51 50.0729 115.781 49.2188L115.531 52.4688C114.531 53.1146 113.312 53.6146 111.875 53.9688C110.438 54.3229 108.917 54.5 107.312 54.5ZM97.5625 43.0625V40.3125H115.875L116.375 43.0625H97.5625ZM133.406 53.5312V23.5H139.344V53.5312H133.406ZM136.438 54V50.5938H152.156L153.375 54H136.438ZM153.375 54L147.875 52.0625L152.469 43.5625H154.781C154.781 47.2708 154.312 50.75 153.375 54ZM143.938 23.0625L143.75 25.2812C143.083 25.5104 142.292 25.7292 141.375 25.9375C140.479 26.125 139.542 26.2917 138.562 26.4375L139.344 23.9062V28.4375H133.406V23.9062L134.125 26.25L129.969 25.3438L130.156 23.0625H143.938ZM130.094 54L130.281 51.7812C131.323 51.3438 132.635 50.9375 134.219 50.5625L133.406 53.1562V48.625H139.344V53.1562L138.656 50.8125L142.812 51.7188L142.625 54H130.094ZM169.875 54.5C165.958 54.5 162.948 53.4688 160.844 51.4062C158.74 49.3438 157.688 46.3958 157.688 42.5625C157.688 38.6667 158.719 35.5833 160.781 33.3125C162.865 31.0208 165.667 29.875 169.188 29.875C172.354 29.875 174.792 30.8438 176.5 32.7812C178.208 34.6979 179.062 37.4583 179.062 41.0625C179.062 41.375 179.052 41.7188 179.031 42.0938C179.01 42.4479 178.979 42.7708 178.938 43.0625L173 41.9062C173 38.7604 172.646 36.5 171.938 35.125C171.229 33.7292 170.073 33.0312 168.469 33.0312C165.365 33.0312 163.812 35.5521 163.812 40.5938C163.812 47.1979 166.479 50.5 171.812 50.5C173.896 50.5 176.073 50.0729 178.344 49.2188L178.094 52.4688C177.094 53.1146 175.875 53.6146 174.438 53.9688C173 54.3229 171.479 54.5 169.875 54.5ZM160.125 43.0625V40.3125H178.438L178.938 43.0625H160.125ZM213.594 53.8125V38.0938C213.594 35.2396 212.292 33.8125 209.688 33.8125C207.708 33.8125 205.604 34.6875 203.375 36.4375L202.75 34.6875C205.396 31.5 208.615 29.9062 212.406 29.9062C214.615 29.9062 216.312 30.5104 217.5 31.7188C218.688 32.9062 219.281 34.6146 219.281 36.8438V53.8125H213.594ZM182.469 54L182.656 51.9062C183.24 51.6146 183.833 51.375 184.438 51.1875C185.042 51 185.646 50.8333 186.25 50.6875L185.469 53.2188V48.75H191.156V53.2188L190.5 50.9375L194.25 51.8438L194.094 54H182.469ZM185.469 53.8125V32.875L191.156 34.1875V53.8125H185.469ZM196.969 54L197.156 51.7812C197.594 51.5521 198.073 51.3542 198.594 51.1875C199.115 51 199.677 50.8333 200.281 50.6875L199.5 53.2188V48.75H205.188V53.2188L204.531 50.9375L208.219 51.8438L208.031 54H196.969ZM199.5 53.8125V38.0938C199.5 35.2396 198.219 33.8125 195.656 33.8125C193.677 33.8125 191.583 34.6875 189.375 36.4375L188.75 34.6875C191.396 31.5 194.594 29.9062 198.344 29.9062C200.531 29.9062 202.219 30.4896 203.406 31.6562C204.594 32.8229 205.188 34.5208 205.188 36.75V53.8125H199.5ZM185.469 38.0312V34.0312L186.375 35.6562L182.062 33.4688L182.219 31.9062C183.198 31.4688 184.323 31.1042 185.594 30.8125C186.865 30.5 188.198 30.2812 189.594 30.1562L190.969 35.3125L185.469 38.0312ZM211.062 54L211.25 51.7812C211.688 51.5521 212.156 51.3542 212.656 51.1875C213.177 51 213.74 50.8333 214.344 50.6875L213.594 53.2188V48.75H219.281V53.2188L218.594 50.9375L222.406 51.8438L222.25 54H211.062ZM237.031 54.5625C233.448 54.5625 230.594 53.4583 228.469 51.25C226.365 49.0208 225.312 46.0312 225.312 42.2812C225.312 38.4896 226.375 35.4792 228.5 33.25C230.646 31 233.521 29.875 237.125 29.875C240.708 29.875 243.552 30.9896 245.656 33.2188C247.76 35.4271 248.812 38.4167 248.812 42.1875C248.812 45.9792 247.75 48.9896 245.625 51.2188C243.5 53.4479 240.635 54.5625 237.031 54.5625ZM237.562 51.3438C240.875 51.3438 242.531 48.5729 242.531 43.0312C242.531 39.8438 242.01 37.3958 240.969 35.6875C239.948 33.9583 238.479 33.0938 236.562 33.0938C233.25 33.0938 231.594 35.8646 231.594 41.4062C231.594 44.5938 232.104 47.0521 233.125 48.7812C234.167 50.4896 235.646 51.3438 237.562 51.3438ZM269.625 53.8125V38.0938C269.625 35.2396 268.292 33.8125 265.625 33.8125C263.542 33.8125 261.396 34.6875 259.188 36.4375L258.562 34.6875C259.833 33.1458 261.312 31.9688 263 31.1562C264.688 30.3229 266.469 29.9062 268.344 29.9062C270.594 29.9062 272.312 30.5104 273.5 31.7188C274.708 32.9062 275.312 34.6146 275.312 36.8438V53.8125H269.625ZM255.281 53.8125V32.875L260.969 34.1875V53.8125H255.281ZM252.281 54L252.469 51.9062C253.052 51.6146 253.646 51.375 254.25 51.1875C254.854 51 255.458 50.8333 256.062 50.6875L255.281 53.2188V48.75H260.969V53.2188L260.312 50.9375L264.188 51.8438L264.031 54H252.281ZM267.094 54L267.25 51.7812C267.688 51.5521 268.167 51.3542 268.688 51.1875C269.208 51 269.771 50.8333 270.375 50.6875L269.625 53.2188V48.75H275.312V53.2188L274.625 50.9375L278.438 51.8438L278.25 54H267.094ZM255.281 38.0312V34.0312L256.188 35.6562L251.875 33.4688L252.031 31.9062C253.01 31.4688 254.135 31.1042 255.406 30.8125C256.677 30.5 258.01 30.2812 259.406 30.1562L260.781 35.3125L255.281 38.0312Z"
        fill={color1}
      />
    </svg>
  )
}
export default HeroTitle