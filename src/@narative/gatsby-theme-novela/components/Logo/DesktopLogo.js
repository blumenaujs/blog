import React from 'react'
import styled from '@emotion/styled'
import mediaqueries from "@styles/media"

const Container = styled.div`
  display: block;

  ${mediaqueries.tablet`
    display: none;
  `}
`

export const DesktopLogo = ({ fill }) => (
  <Container>
    <svg width="250" height="93" viewBox="0 0 446 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M396.25 10.25H386.47V41.93C386.47 44.8 385.86 46.93 384.65 48.26C384.051 48.9236 383.313 49.4468 382.488 49.7925C381.664 50.1382 380.773 50.2978 379.88 50.26C378.217 50.3065 376.577 49.8575 375.17 48.97C373.645 47.9057 372.296 46.6101 371.17 45.13L370.66 44.48L364.3 51L364.66 51.5C366.3 53.7241 368.371 55.5947 370.75 57C373.573 58.5693 376.772 59.3369 380 59.22C382.218 59.2424 384.423 58.8838 386.52 58.16C388.455 57.4739 390.214 56.3673 391.67 54.92C393.167 53.3894 394.316 51.5545 395.04 49.54V49.54C395.882 47.1621 396.288 44.652 396.24 42.13L396.25 10.25Z" fill={fill} />
      <path d="M432.45 39.29C431.75 37.7557 430.727 36.3911 429.45 35.29C427.998 34.0707 426.352 33.1039 424.58 32.43C422.436 31.5831 420.238 30.8815 418 30.33C415.82 29.81 414 29.33 412.61 28.83C411.483 28.4832 410.409 27.9818 409.42 27.34C408.818 26.9538 408.328 26.4157 408 25.78V25.78C407.713 25.1322 407.576 24.428 407.6 23.72C407.602 23.0651 407.758 22.4199 408.055 21.8362C408.352 21.2526 408.782 20.7469 409.31 20.36C410.787 19.308 412.58 18.796 414.39 18.91C416.446 18.9169 418.482 19.3139 420.39 20.08C422.565 20.9515 424.621 22.0939 426.51 23.48L427.11 23.92L432.29 16.61L431.75 16.18C429.398 14.2849 426.754 12.7853 423.92 11.74C420.904 10.6815 417.726 10.1635 414.53 10.21C412.304 10.1923 410.09 10.5299 407.97 11.21C406.065 11.8217 404.299 12.8001 402.77 14.09C401.268 15.366 400.07 16.9607 399.262 18.7579C398.455 20.5552 398.058 22.5099 398.1 24.48C398.043 26.4626 398.415 28.4343 399.19 30.26C399.912 31.8581 401.002 33.2629 402.37 34.36C403.874 35.546 405.563 36.4752 407.37 37.11C409.546 37.898 411.771 38.546 414.03 39.05C415.781 39.4602 417.51 39.9608 419.21 40.55C420.268 40.9018 421.277 41.3892 422.21 42C422.795 42.3595 423.272 42.871 423.59 43.48C423.854 44.1128 423.98 44.7946 423.96 45.48C423.982 46.2057 423.82 46.9252 423.487 47.5707C423.155 48.2162 422.664 48.7666 422.06 49.17C420.404 50.2144 418.465 50.7177 416.51 50.61C413.926 50.6413 411.366 50.1196 409 49.08C406.598 47.9559 404.369 46.4944 402.38 44.74L401.82 44.25L396 51.17L396.53 51.64C399.227 54.1205 402.373 56.0621 405.8 57.36C409.154 58.6028 412.703 59.2328 416.28 59.22C418.61 59.2246 420.928 58.8877 423.16 58.22C425.145 57.6734 427.004 56.7425 428.63 55.48C430.146 54.2256 431.365 52.6512 432.2 50.87C433.078 48.9264 433.515 46.8125 433.48 44.68C433.524 42.8305 433.173 40.9929 432.45 39.29V39.29Z" fill={fill} />
      <path d="M28.7999 33.48C30.685 32.6081 32.3149 31.2672 33.5337 29.5855C34.7525 27.9038 35.5195 25.9375 35.7613 23.8747C36.0031 21.8119 35.7116 19.7216 34.9148 17.8036C34.1179 15.8856 32.8423 14.2041 31.2099 12.92C30.8445 12.6331 30.464 12.3661 30.0699 12.12C28.1537 10.924 25.9388 10.2931 23.6799 10.3H9.43994V59.48H24.5899C26.9549 59.4806 29.2776 58.8525 31.3199 57.66C31.7368 57.4143 32.1406 57.1473 32.5299 56.86C34.4928 55.4067 36.019 53.4424 36.9421 51.1813C37.8653 48.9202 38.15 46.449 37.7653 44.0372C37.3805 41.6254 36.341 39.3655 34.7601 37.5039C33.1792 35.6423 31.1175 34.2504 28.7999 33.48ZM23.6799 12.28C26.1942 12.3271 28.6024 13.3013 30.4422 15.0155C32.282 16.7298 33.4238 19.0632 33.6482 21.5679C33.8726 24.0725 33.1639 26.5718 31.6582 28.5858C30.1524 30.5998 27.9557 31.9866 25.4899 32.48C25.2383 32.5245 25.0103 32.6561 24.8458 32.8517C24.6813 33.0472 24.5907 33.2944 24.5899 33.55V33.55C24.589 33.8241 24.6914 34.0886 24.8767 34.2906C25.0621 34.4926 25.3167 34.6173 25.5899 34.64C28.5555 34.8875 31.3102 36.2731 33.277 38.5063C35.2438 40.7396 36.2701 43.6474 36.1408 46.6205C36.0115 49.5935 34.7368 52.4012 32.5836 54.4554C30.4304 56.5095 27.5658 57.6508 24.5899 57.64H11.2599V12.28H23.6799Z" fill={fill} />
      <path d="M79.1399 58.59C79.1413 58.709 79.119 58.8271 79.0743 58.9375C79.0297 59.0478 78.9636 59.1482 78.8799 59.2329C78.7962 59.3175 78.6965 59.3847 78.5867 59.4306C78.4768 59.4764 78.359 59.5 78.2399 59.5H50.6299V11.23C50.6286 11.111 50.6509 10.9929 50.6956 10.8825C50.7402 10.7722 50.8063 10.6718 50.89 10.5871C50.9737 10.5025 51.0733 10.4353 51.1832 10.3895C51.293 10.3436 51.4109 10.32 51.5299 10.32V10.32C51.649 10.32 51.7668 10.3436 51.8767 10.3895C51.9865 10.4353 52.0862 10.5025 52.1699 10.5871C52.2536 10.6718 52.3197 10.7722 52.3643 10.8825C52.409 10.9929 52.4313 11.111 52.4299 11.23V57.68H78.2399C78.359 57.68 78.4768 57.7036 78.5867 57.7495C78.6965 57.7953 78.7962 57.8625 78.8799 57.9471C78.9636 58.0318 79.0297 58.1322 79.0743 58.2425C79.119 58.3529 79.1413 58.471 79.1399 58.59Z" fill={fill} />
      <path d="M119.42 10.25C119.662 10.25 119.895 10.3455 120.067 10.5159C120.239 10.6863 120.337 10.9177 120.34 11.16C120.34 11.16 120.34 45.66 120.34 45.89C120.172 49.5497 118.6 53.0038 115.95 55.5342C113.301 58.0646 109.779 59.4766 106.115 59.4766C102.451 59.4766 98.9288 58.0646 96.2795 55.5342C93.6303 53.0038 92.0581 49.5497 91.89 45.89C91.89 45.66 91.89 11.16 91.89 11.16C91.8926 10.9177 91.9907 10.6863 92.163 10.5159C92.3352 10.3455 92.5677 10.25 92.81 10.25V10.25C92.9295 10.25 93.0479 10.2735 93.1583 10.3193C93.2687 10.365 93.369 10.432 93.4535 10.5165C93.538 10.601 93.605 10.7014 93.6507 10.8118C93.6965 10.9222 93.72 11.0405 93.72 11.16C93.72 11.16 93.72 45.61 93.72 45.82C93.8909 48.9902 95.2683 51.9748 97.5697 54.1617C99.8712 56.3486 102.922 57.572 106.097 57.581C109.272 57.5899 112.33 56.3838 114.643 54.2099C116.957 52.036 118.351 49.0592 118.54 45.89C118.54 45.66 118.54 11.16 118.54 11.16C118.54 11.0405 118.564 10.9222 118.609 10.8118C118.655 10.7014 118.722 10.601 118.807 10.5165C118.891 10.432 118.991 10.365 119.102 10.3193C119.212 10.2735 119.331 10.25 119.45 10.25H119.42Z" fill={fill} />
      <path d="M356.55 10.25C356.792 10.25 357.025 10.3455 357.197 10.5159C357.369 10.6863 357.467 10.9177 357.47 11.16C357.47 11.16 357.47 45.66 357.47 45.89C357.302 49.5497 355.73 53.0038 353.081 55.5342C350.431 58.0646 346.909 59.4766 343.245 59.4766C339.581 59.4766 336.059 58.0646 333.41 55.5342C330.76 53.0038 329.188 49.5497 329.02 45.89C329.02 45.66 329.02 11.16 329.02 11.16C329.023 10.9177 329.121 10.6863 329.293 10.5159C329.465 10.3455 329.698 10.25 329.94 10.25V10.25C330.06 10.25 330.178 10.2735 330.288 10.3193C330.399 10.365 330.499 10.432 330.583 10.5165C330.668 10.601 330.735 10.7014 330.781 10.8118C330.826 10.9222 330.85 11.0405 330.85 11.16V45.82C331.021 48.9902 332.398 51.9748 334.7 54.1617C337.001 56.3486 340.052 57.572 343.227 57.581C346.402 57.5899 349.46 56.3838 351.773 54.2099C354.087 52.036 355.481 49.0592 355.67 45.89C355.67 45.66 355.67 11.16 355.67 11.16C355.673 10.9177 355.771 10.6863 355.943 10.5159C356.115 10.3455 356.348 10.25 356.59 10.25H356.55Z" fill={fill} />
      <path d="M218.59 58.61C218.591 58.7259 218.569 58.841 218.526 58.9483C218.482 59.0557 218.417 59.1533 218.335 59.2352C218.253 59.3172 218.156 59.382 218.048 59.4258C217.941 59.4695 217.826 59.4913 217.71 59.49H190V10.32H217.65C217.767 10.32 217.883 10.343 217.991 10.3878C218.099 10.4325 218.197 10.498 218.279 10.5807C218.362 10.6633 218.428 10.7614 218.472 10.8694C218.517 10.9774 218.54 11.0931 218.54 11.21V11.21C218.537 11.4443 218.442 11.6681 218.276 11.8329C218.109 11.9976 217.884 12.09 217.65 12.09H191.87V31.01H203.46C203.694 31.01 203.919 31.1024 204.086 31.2671C204.252 31.4319 204.347 31.6557 204.35 31.89V31.89C204.35 32.0064 204.327 32.1217 204.282 32.2291C204.237 32.3365 204.172 32.434 204.089 32.5158C204.006 32.5977 203.908 32.6623 203.8 32.7059C203.692 32.7495 203.576 32.7713 203.46 32.77H191.87V57.77H217.71C217.937 57.7698 218.155 57.857 218.319 58.0135C218.482 58.1699 218.58 58.3836 218.59 58.61V58.61Z" fill={fill} />
      <path d="M259.79 11.23V59.48H258.37L233.11 14.71V58.6C233.11 58.719 233.086 58.8369 233.041 58.9467C232.995 59.0566 232.928 59.1563 232.843 59.24C232.758 59.3237 232.658 59.3898 232.548 59.4344C232.437 59.479 232.319 59.5013 232.2 59.5V59.5C232.081 59.5013 231.963 59.479 231.853 59.4344C231.742 59.3898 231.642 59.3237 231.557 59.24C231.473 59.1563 231.405 59.0566 231.359 58.9467C231.314 58.8369 231.29 58.719 231.29 58.6V10.32H232.71L258 55.11V11.23C258 10.9887 258.096 10.7572 258.267 10.5865C258.437 10.4159 258.669 10.32 258.91 10.32V10.32C259.146 10.3278 259.37 10.4271 259.534 10.5969C259.698 10.7667 259.79 10.9938 259.79 11.23V11.23Z" fill={fill} />
      <path d="M177.31 10.32V58.58C177.31 58.8223 177.214 59.0548 177.044 59.227C176.874 59.3993 176.642 59.4974 176.4 59.5C176.156 59.5 175.922 59.4031 175.749 59.2305C175.577 59.058 175.48 58.824 175.48 58.58V13.48L155.19 33.76L134.86 13.48V58.58C134.855 58.8105 134.765 59.0309 134.605 59.1975C134.446 59.3642 134.23 59.465 134 59.48V59.48C133.756 59.48 133.522 59.3831 133.349 59.2105C133.177 59.038 133.08 58.804 133.08 58.56V10.32H134.37L155.24 31.2L176.06 10.32H177.31Z" fill={fill} />
      <path d="M315.73 59.15C315.62 59.1973 315.501 59.2222 315.381 59.2231C315.262 59.224 315.143 59.201 315.032 59.1554C314.921 59.1097 314.82 59.0424 314.736 58.9573C314.651 58.8723 314.585 58.7712 314.54 58.66L294.73 12.78C294.703 12.7104 294.656 12.6506 294.594 12.6084C294.532 12.5663 294.46 12.5437 294.385 12.5437C294.31 12.5437 294.237 12.5663 294.176 12.6084C294.114 12.6506 294.067 12.7104 294.04 12.78L274.23 58.66C274.185 58.7712 274.118 58.8723 274.034 58.9573C273.95 59.0424 273.849 59.1097 273.738 59.1554C273.627 59.201 273.508 59.224 273.388 59.2231C273.269 59.2222 273.15 59.1973 273.04 59.15V59.15C272.93 59.104 272.829 59.0368 272.745 58.9521C272.661 58.8674 272.594 58.767 272.549 58.6565C272.503 58.546 272.48 58.4276 272.48 58.3081C272.48 58.1886 272.504 58.0703 272.55 57.96L292.64 11.41C292.785 11.0676 293.027 10.7753 293.336 10.5691C293.645 10.3629 294.008 10.252 294.38 10.25C294.753 10.25 295.119 10.36 295.43 10.5663C295.741 10.7726 295.985 11.0661 296.13 11.41L316.22 57.96C316.313 58.1828 316.313 58.4333 316.221 58.6565C316.13 58.8797 315.953 59.0572 315.73 59.15V59.15Z" fill={fill} />
      <path d="M33.28 71.84L28.17 76.94H44.65L39.55 71.84H33.28Z" fill={fill} />
      <path d="M65.03 76.94L70.14 71.84H43.63L48.73 76.94H65.03Z" fill={fill} />
      <path d="M213.75 76.94C215.105 76.94 216.405 77.4784 217.363 78.4367C218.322 79.395 218.86 80.6947 218.86 82.05V82.33L221.46 84.93L224 82.48V82.1C223.999 81.4294 224.13 80.7652 224.385 80.1452C224.641 79.5253 225.017 78.9619 225.49 78.4873C225.964 78.0126 226.527 77.6361 227.146 77.3792C227.765 77.1222 228.429 76.99 229.1 76.99H229.48L234.59 71.89H229.1C227.304 71.8696 225.538 72.351 224 73.28C223.016 73.8119 222.151 74.5403 221.46 75.42C220.749 74.5484 219.876 73.8219 218.89 73.28C217.349 72.3512 215.579 71.8699 213.78 71.89H208.39L213.5 76.99L213.75 76.94Z" fill={fill} />
      <path d="M19.2499 71.84C18.18 71.8356 17.1382 71.4969 16.2703 70.8711C15.4025 70.2453 14.752 69.3638 14.4099 68.35C14.222 67.866 13.8902 67.4513 13.4593 67.1616C13.0284 66.872 12.5191 66.7213 11.9999 66.73V66.73C11.6086 66.728 11.2222 66.8183 10.8723 66.9936C10.5223 67.1689 10.2186 67.4242 9.98581 67.7389C9.753 68.0535 9.59765 68.4186 9.53234 68.8045C9.46704 69.1904 9.49362 69.5863 9.60995 69.96C10.3996 72.3193 12.0299 74.3055 14.1899 75.54C15.7253 76.4749 17.4924 76.96 19.2899 76.94H24.1299L29.2399 71.84H19.2499Z" fill={fill} />
      <path d="M74.22 71.84L69.11 76.94H85.53L80.42 71.84H74.22Z" fill={fill} />
      <path d="M105.98 76.94L111.08 71.84H84.5699L89.6699 76.94H105.98Z" fill={fill} />
      <path d="M115.16 71.84L110.06 76.94H126.47L121.37 71.84H115.16Z" fill={fill} />
      <path d="M146.92 76.94L152.03 71.84H125.51L130.62 76.94H146.92Z" fill={fill} />
      <path d="M156.11 71.84L151 76.94H167.42L162.31 71.84H156.11Z" fill={fill} />
      <path d="M187.87 76.94L192.97 71.84H166.46L171.56 76.94H187.87Z" fill={fill} />
      <path d="M197.05 71.84L191.94 76.94H208.36L203.25 71.84H197.05Z" fill={fill} />
      <path d="M409.64 71.84L414.75 76.94H398.27L403.37 71.84H409.64Z" fill={fill} />
      <path d="M377.88 76.94L372.78 71.84H399.29L394.19 76.94H377.88Z" fill={fill} />
      <path d="M423.67 71.84C424.74 71.8356 425.782 71.4969 426.65 70.8711C427.517 70.2453 428.168 69.3638 428.51 68.35C428.703 67.8528 429.047 67.4288 429.493 67.138C429.94 66.8473 430.467 66.7045 431 66.73V66.73C431.392 66.7258 431.78 66.8148 432.131 66.9894C432.482 67.1641 432.786 67.4195 433.02 67.7347C433.253 68.0499 433.408 68.416 433.473 68.8028C433.537 69.1896 433.509 69.5862 433.39 69.96C432.6 72.3193 430.97 74.3055 428.81 75.54C427.275 76.4749 425.508 76.96 423.71 76.94H418.87L413.76 71.84H423.67Z" fill={fill} />
      <path d="M368.7 71.84L373.81 76.94H357.39L362.5 71.84H368.7Z" fill={fill} />
      <path d="M336.94 76.94L331.84 71.84H358.35L353.25 76.94H336.94Z" fill={fill} />
      <path d="M327.76 71.84L332.86 76.94H316.45L321.55 71.84H327.76Z" fill={fill} />
      <path d="M296 76.94L290.89 71.84H317.41L312.3 76.94H296Z" fill={fill} />
      <path d="M286.81 71.84L291.92 76.94H275.5L280.61 71.84H286.81Z" fill={fill} />
      <path d="M255.05 76.94L249.95 71.84H276.46L271.36 76.94H255.05Z" fill={fill} />
      <path d="M245.87 71.84L250.97 76.94H234.56L239.67 71.84H245.87Z" fill={fill} />
    </svg>
  </Container>
)