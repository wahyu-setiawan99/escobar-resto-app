"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[46],{756:(n,A,e)=>{e.d(A,{Z:()=>r});var t=e(537),i=e.n(t),o=e(645),a=e.n(o)()(i());a.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\nbody {\n  background-color: #191A1C;\n  color: white;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nh1 {\n  font-size: 36px;\n  \n}\n\nh2 {\n  font-size: 32px;\n  text-align: center;\n}\n\nh3 {\n  font-size: 24px;\n}\n\nh4 {\n  font-size: 18px;\n  font-weight: 500;\n}\n\np {\n  font-size: 18px;\n}\n\nsection {\n  margin: 32px auto;\n}\n\n\n\n/* start of header */\n.header__container {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  padding:24px 42px;\n  justify-content: space-between;\n  align-items: flex-start;\n  background-color: #212326;\n}\n\n.site-title {\n  margin: 8px 0;\n}\n\n.site-title a{\n  color: white;\n  padding: 16px;\n}\n\n.nav__container ul {\n  display: flex;\n  flex-direction: row;\n  list-style-type: none;\n}\n\n.nav__container ul li{\n  margin: 20px 10px;\n}\n\n.nav__container ul li a {\n  color: white;\n  font-size: 18px;\n  padding: 16px;\n}\n\n.nav__container ul li a:hover {\n  color: wheat;\n}\n\n.burger-icon {\n  display: none;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  padding: 14px 4px;\n  background-color: transparent;\n  color: white;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0px;\n  outline: none;\n}\n/* end  of header */\n\n\n/* start of jumbotron */\n.jumbotron_container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  \n}\n\n.jumbotron_short {\n  position: absolute;\n  bottom: 5%;\n}\n\n.jumbotron_preview {\n  width: 100%;\n}\n\n\n.jumbotron_image picture {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.jumbotron_image img {\n  width: 1000px;\n  aspect-ratio: 16/9;\n  \n}\n\n/* end of jumbotron */\n\n\n/* start of resto list */\n.list-resto__container,  .list-favorite__container{\n  max-width: 90%;\n  margin: auto;\n  padding: 18px 0px;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-template-rows: minmax(min-content, max-content);\n  gap: 18px;\n}\n/* end of resto list */\n\n\n/* start of resto item */\n.itemresto_container {\n  position: relative;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\n.city_resto {\n  position: absolute;\n  top: 3%;\n  left: 10;\n  background-color: black;\n  min-width: 120px;\n  padding: 10px 0px;\n}\n\n.city_resto p {\n  font-size: 20px;\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: 1.5px;\n}\n\n.image_resto {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.image_resto img {\n  min-width: 100%;\n  height: 400px;\n  border-radius: 12px;\n}\n\n.detail-description_resto {\n  padding: 8px;\n  min-height: 200px;\n}\n\n.rating_resto {\n  margin-bottom: 8px;\n}\n\n.name_resto {\n  margin-bottom: 12px;\n\n}\n\n.name_resto a {\n  color: white;\n  padding: 12px 0px;\n}\n\n.name_resto a:hover {\n  color: wheat;\n}\n\n.preview_resto p {\n  line-height: 1.3;\n  display: -webkit-box;\n  overflow: hidden;\n   text-overflow: ellipsis;\n   -webkit-line-clamp: 7;\n           line-clamp: 7; \n   -webkit-box-orient: vertical;\n}\n\n.loading-text__indicator-item {\n  padding: 8px;\n  background-color: black;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n}\n\n/* end of resto item */\n\n\n\n\n/* start of detail page */\n.detail-resto__container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 16px 0px;\n}\n\n.error-element {\n  text-align: center;\n}\n\n\n\n.detail-resto__header {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 18px;\n  position: relative;\n}\n\n.loading-text__indicator {\n  padding: 12px;\n  background-color: black;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n}\n\n.detail-resto__header img {\n  width: 1000px;\n  height: 650px;\n}\n\n\n.detail-resto__address p {\n  text-align: center;\n  padding: 8px 18px;\n}\n\n.detail-resto__preview {\n  padding: 12px;\n  margin: 12px auto;\n  max-width: 80%;\n  line-height: 1.6;\n  text-align: center;\n}\n\n.detail-resto__menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.detail-resto__menu ol li {\n  line-height: 1.5;\n}\n\n.detail-resto__menu h3 {\n  text-align: left;\n  margin: 12px 0;\n  text-decoration: underline;\n}\n\n.detail-resto__review {\n  margin: 24px auto;\n  padding: 12px 36px;\n  width: 70%;\n}\n\n.detail-resto__review h3 {\n  text-align: center;\n  margin: 24px 0px;\n}\n\n.list-review {\n  max-height: 340px;\n  overflow: auto;\n}\n\n.item-review {\n  padding: 12px;\n  border: 2px white solid;\n  margin-top: 12px;\n  border-radius: 12px;\n}\n\n.item-review p {\n  margin: 10px 0;\n}\n\n\n\n\n.detail-resto__post-feedback h3 {\n  text-align: center;\n  margin: 24px 0px;\n  \n}\n.post-feedback {\n  display: flex;\n  flex-direction: column;\n  min-height: 200px;\n}\n\n.post-feedback input, .post-feedback textarea, .post-feedback button {\n  background-color: transparent;\n  border: 2px white solid;\n  color: white;\n  width: 65%;\n  margin: 6px auto;\n  padding: 12px;\n  font-size: 18px;\n  border-radius: 8px;\n}\n\n.post-feedback .success-text {\n  text-align: center;\n}\n\n\n/* end of detail page */\n\n\n\n\n/* start of liker button */\n\n\n\nliker-button {\n  position: fixed;\n  bottom: 12px;\n  right: 12px;\n}\n\n.liker__container {\n  display: flex;\n  flex-direction: column;\n}\n\n.liker__container .like-button, .liker__container .liked-button  {\n  font-size: 48px;\n  position: relative;\n  bottom: 12px;\n  right: 12px;\n  cursor: pointer;\n  margin-left: 10px;\n}\n\n\n/* end of liker button */\n\n\n\n\n\n\n/* start of footer */\n.footer_container {\n  padding: 28px;\n  background-color: #212326;\n}\n\n.footer_container h4 {\n  text-align: center;\n  margin: auto;\n}\n/* end of footer */\n\n\n\n\n\n\n\n\n@media screen and (max-width: 1200px) {\n  .jumbotron_image img {\n    width: 100%;\n  }\n\n  .detail-resto__header img {\n    width: 100%;\n    height: 600px;\n  }\n\n\n}\n\n\n@media screen and (max-width: 1000px) {\n  h1 {\n    font-size: 32px;\n    padding-top: 4px;\n  }\n\n  h2 {\n    font-size: 26px;\n  }\n\n  h3 {\n    font-size: 22px;\n  }\n\n  h4 {\n    font-size: 18px;\n  }\n\n  p {\n    font-size: 16px;\n  }\n\n  nav li {\n    display: none;\n  }\n\n  nav .burger-icon {\n    display: block;\n  }\n\n  nav .responsive {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n  }\n\n  nav .responsive li{\n     display: block;\n  }\n\n  .list-resto__container, .list-favorite__container {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 24px;\n  }\n  \n}\n\n\n@media screen and (max-width: 650px) {\n  h1 {\n    font-size: 28px;\n  }\n\n  h2 {\n    font-size: 24px;\n  }\n\n  h3 {\n    font-size: 20px;\n  }\n\n  h4 {\n    font-size: 16px;\n  }\n\n  p {\n    font-size: 14px;\n  }\n\n  .header__container {\n    padding:12px;\n  }\n\n  .nav__container ul li a {\n    font-size: 14px;\n  }\n\n  .list-resto__container, .list-favorite__container {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n\n  .detail-resto__preview {\n    margin: 6px auto;\n    max-width: 95%;\n  }\n\n  .detail-resto__header img {\n    height: 400px;\n  }\n\n  .detail-resto__review {\n    padding: 12px 24px;\n    width: 100%;\n  }\n\n  .post-feedback input, .post-feedback textarea, .post-feedback button {\n    width: 90%;\n    font-size: 14px;\n  }\n\n  .liker__container .like-button, .liker__container .liked-button  {\n    font-size: 44px;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  h1 {\n    font-size: 24px;\n  }\n\n  h2 {\n    font-size: 22px;\n  }\n\n  h3 {\n    font-size: 18px;\n  }\n\n  h4 {\n    font-size: 16px;\n  }\n\n  .header__container {\n    padding:6px 0px;\n  }\n\n  \n\n  .detail-description_resto {\n    padding: 8px 4px;\n  }\n\n  .image_resto img {\n    height: 300px;\n  }\n\n  .city_resto p {\n    letter-spacing: 1.2px;\n    font-size: 14px;\n  }\n\n  .detail-resto__preview {\n    text-align: left;\n  }\n\n  .detail-resto__header img {\n    height: 300px;\n  }\n\n  .detail-resto__menu-food, .detail-resto__menu-drink {\n    padding: 8px;\n  }\n\n  .detail-resto__menu ol li {\n    list-style-type: none;\n  }\n\n}\n\n\n.skeleton {\n  user-select: none;\n  color: #242328;\n  background-color: #242328;\n}\n\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\nbody {\n  background-color: #191A1C;\n  color: white;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nh1 {\n  font-size: 36px;\n  \n}\n\nh2 {\n  font-size: 32px;\n  text-align: center;\n}\n\nh3 {\n  font-size: 24px;\n}\n\nh4 {\n  font-size: 18px;\n  font-weight: 500;\n}\n\np {\n  font-size: 18px;\n}\n\nsection {\n  margin: 32px auto;\n}\n\n\n\n/* start of header */\n.header__container {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  padding:24px 42px;\n  justify-content: space-between;\n  align-items: flex-start;\n  background-color: #212326;\n}\n\n.site-title {\n  margin: 8px 0;\n}\n\n.site-title a{\n  color: white;\n  padding: 16px;\n}\n\n.nav__container ul {\n  display: flex;\n  flex-direction: row;\n  list-style-type: none;\n}\n\n.nav__container ul li{\n  margin: 20px 10px;\n}\n\n.nav__container ul li a {\n  color: white;\n  font-size: 18px;\n  padding: 16px;\n}\n\n.nav__container ul li a:hover {\n  color: wheat;\n}\n\n.burger-icon {\n  display: none;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  padding: 14px 4px;\n  background-color: transparent;\n  color: white;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0px;\n  outline: none;\n}\n/* end  of header */\n\n\n/* start of jumbotron */\n.jumbotron_container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  \n}\n\n.jumbotron_short {\n  position: absolute;\n  bottom: 5%;\n}\n\n.jumbotron_preview {\n  width: 100%;\n}\n\n\n.jumbotron_image picture {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.jumbotron_image img {\n  width: 1000px;\n  aspect-ratio: 16/9;\n  \n}\n\n/* end of jumbotron */\n\n\n/* start of resto list */\n.list-resto__container,  .list-favorite__container{\n  max-width: 90%;\n  margin: auto;\n  padding: 18px 0px;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-template-rows: minmax(min-content, max-content);\n  gap: 18px;\n}\n/* end of resto list */\n\n\n/* start of resto item */\n.itemresto_container {\n  position: relative;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\n.city_resto {\n  position: absolute;\n  top: 3%;\n  left: 10;\n  background-color: black;\n  min-width: 120px;\n  padding: 10px 0px;\n}\n\n.city_resto p {\n  font-size: 20px;\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: 1.5px;\n}\n\n.image_resto {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.image_resto img {\n  min-width: 100%;\n  height: 400px;\n  border-radius: 12px;\n}\n\n.detail-description_resto {\n  padding: 8px;\n  min-height: 200px;\n}\n\n.rating_resto {\n  margin-bottom: 8px;\n}\n\n.name_resto {\n  margin-bottom: 12px;\n\n}\n\n.name_resto a {\n  color: white;\n  padding: 12px 0px;\n}\n\n.name_resto a:hover {\n  color: wheat;\n}\n\n.preview_resto p {\n  line-height: 1.3;\n  display: -webkit-box;\n  overflow: hidden;\n   text-overflow: ellipsis;\n   -webkit-line-clamp: 7;\n           line-clamp: 7; \n   -webkit-box-orient: vertical;\n}\n\n.loading-text__indicator-item {\n  padding: 8px;\n  background-color: black;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n}\n\n/* end of resto item */\n\n\n\n\n/* start of detail page */\n.detail-resto__container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 16px 0px;\n}\n\n.error-element {\n  text-align: center;\n}\n\n\n\n.detail-resto__header {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 18px;\n  position: relative;\n}\n\n.loading-text__indicator {\n  padding: 12px;\n  background-color: black;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n}\n\n.detail-resto__header img {\n  width: 1000px;\n  height: 650px;\n}\n\n\n.detail-resto__address p {\n  text-align: center;\n  padding: 8px 18px;\n}\n\n.detail-resto__preview {\n  padding: 12px;\n  margin: 12px auto;\n  max-width: 80%;\n  line-height: 1.6;\n  text-align: center;\n}\n\n.detail-resto__menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.detail-resto__menu ol li {\n  line-height: 1.5;\n}\n\n.detail-resto__menu h3 {\n  text-align: left;\n  margin: 12px 0;\n  text-decoration: underline;\n}\n\n.detail-resto__review {\n  margin: 24px auto;\n  padding: 12px 36px;\n  width: 70%;\n}\n\n.detail-resto__review h3 {\n  text-align: center;\n  margin: 24px 0px;\n}\n\n.list-review {\n  max-height: 340px;\n  overflow: auto;\n}\n\n.item-review {\n  padding: 12px;\n  border: 2px white solid;\n  margin-top: 12px;\n  border-radius: 12px;\n}\n\n.item-review p {\n  margin: 10px 0;\n}\n\n\n\n\n.detail-resto__post-feedback h3 {\n  text-align: center;\n  margin: 24px 0px;\n  \n}\n.post-feedback {\n  display: flex;\n  flex-direction: column;\n  min-height: 200px;\n}\n\n.post-feedback input, .post-feedback textarea, .post-feedback button {\n  background-color: transparent;\n  border: 2px white solid;\n  color: white;\n  width: 65%;\n  margin: 6px auto;\n  padding: 12px;\n  font-size: 18px;\n  border-radius: 8px;\n}\n\n.post-feedback .success-text {\n  text-align: center;\n}\n\n\n/* end of detail page */\n\n\n\n\n/* start of liker button */\n\n\n\nliker-button {\n  position: fixed;\n  bottom: 12px;\n  right: 12px;\n}\n\n.liker__container {\n  display: flex;\n  flex-direction: column;\n}\n\n.liker__container .like-button, .liker__container .liked-button  {\n  font-size: 48px;\n  position: relative;\n  bottom: 12px;\n  right: 12px;\n  cursor: pointer;\n  margin-left: 10px;\n}\n\n\n/* end of liker button */\n\n\n\n\n\n\n/* start of footer */\n.footer_container {\n  padding: 28px;\n  background-color: #212326;\n}\n\n.footer_container h4 {\n  text-align: center;\n  margin: auto;\n}\n/* end of footer */\n\n\n\n\n\n\n\n\n@media screen and (max-width: 1200px) {\n  .jumbotron_image img {\n    width: 100%;\n  }\n\n  .detail-resto__header img {\n    width: 100%;\n    height: 600px;\n  }\n\n\n}\n\n\n@media screen and (max-width: 1000px) {\n  h1 {\n    font-size: 32px;\n    padding-top: 4px;\n  }\n\n  h2 {\n    font-size: 26px;\n  }\n\n  h3 {\n    font-size: 22px;\n  }\n\n  h4 {\n    font-size: 18px;\n  }\n\n  p {\n    font-size: 16px;\n  }\n\n  nav li {\n    display: none;\n  }\n\n  nav .burger-icon {\n    display: block;\n  }\n\n  nav .responsive {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n  }\n\n  nav .responsive li{\n     display: block;\n  }\n\n  .list-resto__container, .list-favorite__container {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 24px;\n  }\n  \n}\n\n\n@media screen and (max-width: 650px) {\n  h1 {\n    font-size: 28px;\n  }\n\n  h2 {\n    font-size: 24px;\n  }\n\n  h3 {\n    font-size: 20px;\n  }\n\n  h4 {\n    font-size: 16px;\n  }\n\n  p {\n    font-size: 14px;\n  }\n\n  .header__container {\n    padding:12px;\n  }\n\n  .nav__container ul li a {\n    font-size: 14px;\n  }\n\n  .list-resto__container, .list-favorite__container {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n\n  .detail-resto__preview {\n    margin: 6px auto;\n    max-width: 95%;\n  }\n\n  .detail-resto__header img {\n    height: 400px;\n  }\n\n  .detail-resto__review {\n    padding: 12px 24px;\n    width: 100%;\n  }\n\n  .post-feedback input, .post-feedback textarea, .post-feedback button {\n    width: 90%;\n    font-size: 14px;\n  }\n\n  .liker__container .like-button, .liker__container .liked-button  {\n    font-size: 44px;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  h1 {\n    font-size: 24px;\n  }\n\n  h2 {\n    font-size: 22px;\n  }\n\n  h3 {\n    font-size: 18px;\n  }\n\n  h4 {\n    font-size: 16px;\n  }\n\n  .header__container {\n    padding:6px 0px;\n  }\n\n  \n\n  .detail-description_resto {\n    padding: 8px 4px;\n  }\n\n  .image_resto img {\n    height: 300px;\n  }\n\n  .city_resto p {\n    letter-spacing: 1.2px;\n    font-size: 14px;\n  }\n\n  .detail-resto__preview {\n    text-align: left;\n  }\n\n  .detail-resto__header img {\n    height: 300px;\n  }\n\n  .detail-resto__menu-food, .detail-resto__menu-drink {\n    padding: 8px;\n  }\n\n  .detail-resto__menu ol li {\n    list-style-type: none;\n  }\n\n}\n\n\n.skeleton {\n  user-select: none;\n  color: #242328;\n  background-color: #242328;\n}\n\n"],sourceRoot:""}]);const r=a},46:(n,A,e)=>{var t=e(379),i=e.n(t),o=e(795),a=e.n(o),r=e(569),p=e.n(r),l=e(565),E=e.n(l),s=e(216),d=e.n(s),B=e(589),x=e.n(B),C=e(756),c={};c.styleTagTransform=x(),c.setAttributes=E(),c.insert=p().bind(null,"head"),c.domAPI=a(),c.insertStyleElement=d();i()(C.Z,c),C.Z&&C.Z.locals&&C.Z.locals}}]);
//# sourceMappingURL=46.bundle.js.map