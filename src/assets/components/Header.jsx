import React from 'react'
import Logo from '../PINK LOGO.png'
function Header() {
  return (
    <>
      <div
      data-collapse="medium"
      data-animation="over-left"
      data-duration={400}
      data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="header w-nav absolute top-0 left-0"
    >
      <div className="container-default w-container">
      <div className="header-wrapper">
          <div className="split-content header-right">
            <a
              href="home.html"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <img
                src={Logo}
                alt="Appfly X Webflow Template - Logo"
                className="header-logo"
              />
            </a>
          </div>
          <div className="split-content header-center">
            <nav role="navigation" className="nav-menu w-nav-menu">
              <ul role="list" className="header-navigation">
                <li className="nav-item-wrapper">
                  <a
                    href="home.html"
                    aria-current="page"
                    className="nav-link w--current"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item-wrapper">
                  <a href="about.html" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item-wrapper">
                  <div
                    data-hover="true"
                    data-delay={0}
                    data-w-id="fe4f34b6-c7e6-17e4-cc9a-1786972fb4f3"
                    className="nav-link-dropdown w-dropdown"
                  >
                    <div className="nav-link dropdown w-dropdown-toggle">
                      <div>
                        Pages&nbsp;<span className="dropdown-arrow"></span>
                      </div>
                    </div>
                    <nav className="dropdown-list w-dropdown-list">
                      <div className="dropdown-nav-main-wrapper">
                        <div className="dropdown-nav-pages-wrapper">
                          <div className="title dropdown-nav-title">Menu</div>
                          <div className="dropdown-nav-content">
                            <ul role="list" className="dropdown-nav">
                              <li className="dropdown-nav-item">
                                <a
                                  href="home.html"
                                  aria-current="page"
                                  className="dropdown-nav-link w--current"
                                >
                                  Home
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="about.html"
                                  className="dropdown-nav-link"
                                >
                                  About
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="features.html"
                                  className="dropdown-nav-link"
                                >
                                  Features
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="blog.html"
                                  className="dropdown-nav-link"
                                >
                                  Blog
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="blog/6-great-productivity-apps-you-can-download-for-free-this-week-on-iphone.html"
                                  className="dropdown-nav-link"
                                >
                                  Blog Post
                                </a>
                              </li>
                            </ul>
                            <ul role="list" className="dropdown-nav last">
                              <li className="dropdown-nav-item">
                                <a
                                  href="pricing.html"
                                  className="dropdown-nav-link"
                                >
                                  Pricing
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="product/standard.html"
                                  className="dropdown-nav-link"
                                >
                                  Pricing Single
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="careers.html"
                                  className="dropdown-nav-link"
                                >
                                  Jobs
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="career/web-designer-developer.html"
                                  className="dropdown-nav-link"
                                >
                                  Jobs Single
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="contact.html"
                                  className="dropdown-nav-link"
                                >
                                  Contact
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="dropdown-nav-pages-wrapper last">
                          <div className="title dropdown-nav-title">
                            Utility Pages
                          </div>
                          <div className="dropdown-nav-content">
                            <ul role="list" className="dropdown-nav last">
                              <li className="dropdown-nav-item">
                                <a
                                  href="404.html"
                                  className="dropdown-nav-link"
                                >
                                  404 Not Found
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="401.html"
                                  className="dropdown-nav-link"
                                >
                                  Password Protected
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="utility-pages/licenses.html"
                                  className="dropdown-nav-link"
                                >
                                  Licenses
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="utility-pages/styleguide.html"
                                  className="dropdown-nav-link"
                                >
                                  Style Guide
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="utility-pages/start-here.html"
                                  className="dropdown-nav-link"
                                >
                                  Start Here
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="utility-pages/changelog.html"
                                  className="dropdown-nav-link"
                                >
                                  Changelog
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  href="https://brixtemplates.com/more-templates"
                                  className="dropdown-nav-link special"
                                >
                                  Browse More Templates
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li className="nav-item-wrapper">
                  <a href="features.html" className="nav-link">
                    Features
                  </a>
                </li>
                <li className="nav-item-wrapper button-mobile">
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    className="button-primary header-button mobile w-button"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </nav>
            {/* <div
              data-node-type="commerce-cart-wrapper"
              data-open-product=""
              data-wf-cart-type="rightSidebar"
              data-wf-cart-query="query Dynamo2 {
  database {
    id
    commerceOrder {
comment
extraItems {
  name
  pluginId
  pluginName
  price {
    value
    unit
    decimalValue
    string
  }
}
id
startedOn
statusFlags {
  hasDownloads
  hasSubscription
  isFreeOrder
  requiresShipping
}
subtotal {
  value
  unit
  decimalValue
  string
}
total {
  value
  unit
  decimalValue
  string
}
updatedOn
userItems {
  count
  id
  price {
    value
    unit
    decimalValue
    string
  }
  product {
    id
    cmsLocaleId
    f__draft_0ht
    f__archived_0ht
    f_name_
    f_sku_properties_3dr {
      id
      name
      enum {
        id
        name
        slug
      }
    }
    fullSlug
  }
  rowTotal {
    value
    unit
    decimalValue
    string
  }
  sku {
    cmsLocaleId
    f__draft_0ht
    f__archived_0ht
    f_main_image_4dr {
      url
      file {
        size
        origFileName
        createdOn
        updatedOn
        mimeType
        width
        height
        variants {
          origFileName
          quality
          height
          width
          s3Url
          error
          size
        }
      }
      alt
    }
    f_sku_values_3dr {
      property {
        id
      }
      value {
        id
      }
    }
    id
  }
  subscriptionFrequency
  subscriptionInterval
  subscriptionTrial
}
userItemsCount
    }
  }
  site {
    id
    commerce {
businessAddress {
  country
}
defaultCountry
defaultCurrency
quickCheckoutEnabled
    }
  }
}"
              data-wf-page-link-href-prefix=""
              className="w-commerce-commercecartwrapper cart"
            >
              <a
                href="#"
                data-node-type="commerce-cart-open-link"
                className="w-commerce-commercecartopenlink cart-button w-inline-block"
                role="button"
                aria-haspopup="dialog"
                aria-label="Open cart"
              >
                <div className="w-inline-block">
                  Cart <span className="accent-text-neutral-600">(</span>
                </div>
                <div
                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                  className="w-commerce-commercecartopenlinkcount cart-quantity"
                >
                  0
                </div>
                <div className="accent-text-neutral-600">)</div>
              </a>
              <div
                data-node-type="commerce-cart-container-wrapper"
                 
                className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar cart-wrapper"
              >
                <div
                  data-node-type="commerce-cart-container"
                  role="dialog"
                  className="w-commerce-commercecartcontainer cart-container"
                >
                  <div className="w-commerce-commercecartheader cart-header">
                    <h4 className="w-commerce-commercecartheading">
                      Your Cart
                    </h4>
                    <a
                      href="#"
                      data-node-type="commerce-cart-close-link"
                      className="w-commerce-commercecartcloselink cart-close-button w-inline-block"
                      role="button"
                      aria-label="Close cart"
                    >
                      <svg width="16px" height="16px" viewBox="0 0 16 16">
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g fillRule="nonzero" fill="#333333">
                            <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="w-commerce-commercecartformwrapper">
                    <form
                      data-node-type="commerce-cart-form"
                       
                      className="w-commerce-commercecartform"
                    >
                      <div
                        className="w-commerce-commercecartlist cart-list"
                        data-wf-collection="database.commerceOrder.userItems"
                        data-wf-template-id="wf-template-86d01ae5-f4f5-e0fe-d623-45a4fc1f5cf4"
                      >
                        <div className="w-commerce-commercecartitem cart-item">
                          <div className="order-item-wrapper">
                            <a
                              data-wf-bindings="%5B%7B%22dataWHref%22%3A%7B%22type%22%3A%22FullSlug%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.fullSlug%22%7D%7D%5D"
                              href="#"
                              className="image-wrapper cart-item-image w-inline-block"
                            >
                              <img
                                data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D"
                                src="#"
                                alt=""
                                className="w-commerce-commercecartitemimage image cart-item-image w-dyn-bind-empty"
                              />
                            </a>
                            <div className="w-commerce-commercecartiteminfo cart-item-content">
                              <a
                                data-wf-bindings="%5B%7B%22dataWHref%22%3A%7B%22type%22%3A%22FullSlug%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.fullSlug%22%7D%7D%2C%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D"
                                href="#"
                                className="title cart-item-title w-dyn-bind-empty"
                              />
                              <div
                                data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D"
                                className="cart-item-price"
                              >
                                $&nbsp;0.00&nbsp;USD
                              </div>
                              <ul
                                data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D"
                                className="w-commerce-commercecartoptionlist"
                                data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr"
                                data-wf-template-id="wf-template-86d01ae5-f4f5-e0fe-d623-45a4fc1f5cfa"
                              >
                                <li>
                                  <span
                                    data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D"
                                    className="w-dyn-bind-empty"
                                  />
                                  <span>: </span>
                                  <span
                                    data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D"
                                    className="cart-item-option-result w-dyn-bind-empty"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <a
                            href="#"
                            role=""
                            data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                            className="remove-button w-inline-block"
                            data-wf-cart-action="remove-item"
                            data-commerce-sku-id=""
                            aria-label="Remove item from cart"
                          >
                            <div>Remove</div>
                          </a>
                          <input
                            data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                            className="w-commerce-commercecartquantity input cart-item-quantity"
                            required=""
                            pattern="^[0-9]+$"
                            inputMode="numeric"
                            type="number"
                            name="quantity"
                            autoComplete="off"
                            data-wf-cart-action="update-item-quantity"
                            data-commerce-sku-id=""
                            defaultValue={1}
                          />
                        </div>
                      </div>
                      <div className="w-commerce-commercecartfooter cart-footer">
                        <div
                          aria-live=""
                          aria-atomic="false"
                          className="w-commerce-commercecartlineitem"
                        >
                          <div>Subtotal</div>
                          <div
                            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
                            className="w-commerce-commercecartordervalue cart-subtotal"
                          />
                        </div>
                        <div>
                          <div
                            data-node-type="commerce-cart-quick-checkout-actions"
                            
                          >
                            <a
                              role="button"
                              tabIndex={0}
                              aria-haspopup="dialog"
                              aria-label="Apple Pay"
                              data-node-type="commerce-cart-apple-pay-button"
                              style={{
                                backgroundImage:
                                  "-webkit-named-image(apple-pay-logo-white)",
                                backgroundSize: "100% 50%",
                                backgroundPosition: "50% 50%",
                                backgroundRepeat: "no-repeat"
                              }}
                              className="w-commerce-commercecartapplepaybutton apple-pay"
                            >
                              <div />
                            </a>
                            <a
                              role="button"
                              tabIndex={0}
                              aria-haspopup="dialog"
                              data-node-type="commerce-cart-quick-checkout-button"
                              style={{ display: "none" }}
                              className="w-commerce-commercecartquickcheckoutbutton"
                            >
                              <svg
                                className="w-commerce-commercequickcheckoutgoogleicon"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <defs>
                                  <polygon
                                    id="google-mark-a"
                                    points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                                  />
                                  <polygon
                                    id="google-mark-c"
                                    points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                                  ></polygon>
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <path
                                    fill="#4285F4"
                                    d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                                  ></path>
                                  <path
                                    fill="#34A853"
                                    d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                                  ></path>
                                  <g transform="translate(0 4)">
                                    <mask id="google-mark-b" fill="#fff">
                                      <use xlinkHref="#google-mark-a" />
                                    </mask>
                                    <path
                                      fill="#FBBC04"
                                      d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                      mask="url(#google-mark-b)"
                                    />
                                  </g>
                                  <mask id="google-mark-d" fill="#fff">
                                    <use xlinkHref="#google-mark-c" />
                                  </mask>
                                  <path
                                    fill="#EA4335"
                                    d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                    mask="url(#google-mark-d)"
                                  />
                                </g>
                              </svg>
                              <svg
                                className="w-commerce-commercequickcheckoutmicrosofticon"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g fill="none" fillRule="evenodd">
                                  <polygon
                                    fill="#F05022"
                                    points="7 7 1 7 1 1 7 1"
                                  />
                                  <polygon
                                    fill="#7DB902"
                                    points="15 7 9 7 9 1 15 1"
                                  />
                                  <polygon
                                    fill="#00A4EE"
                                    points="7 15 1 15 1 9 7 9"
                                  />
                                  <polygon
                                    fill="#FFB700"
                                    points="15 15 9 15 9 9 15 9"
                                  />
                                </g>
                              </svg>
                              <div>Pay with browser.</div>
                            </a>
                          </div>
                          <a
                            href="checkout.html"
                            value="Continue to Checkout"
                            data-node-type="cart-checkout-button"
                            className="w-commerce-commercecartcheckoutbutton button-primary"
                            data-loading-text="Hang Tight..."
                          >
                            Continue to Checkout
                          </a>
                        </div>
                      </div>
                    </form>
                    <div className="w-commerce-commercecartemptystate cart-empty-state">
                      <div>No items found.</div>
                      <a
                        href="pricing.html"
                        className="button-primary cart-empty w-button"
                      >
                        Go to pricing
                      </a>
                    </div>
                    <div
                      aria-live=""
                      
                      data-node-type="commerce-cart-error"
                      className="w-commerce-commercecarterrorstate error-message"
                    >
                      <div
                        className="w-cart-error-msg"
                        data-w-cart-quantity-error="Product is not available in this quantity."
                        data-w-cart-general-error="Something went wrong when adding this item to the cart."
                        data-w-cart-checkout-error="Checkout is disabled on this site."
                        data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                        data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates."
                      >
                        Product is not available in this quantity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="split-content header-left">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              className="button-primary header-button w-button"
            >
              Download
            </a>
            <div className="menu-button w-nav-button">
              <div className="header-menu-button-icon-wrapper">
                <div className="icon-wrapper">
                  <div className="header-menu-button-icon-top" />
                  <div className="header-menu-button-icon-medium" />
                  <div className="header-menu-button-icon-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div> 
       </div>
      <div className="bg header" />
    </div>
    </>
  )
}

export default Header