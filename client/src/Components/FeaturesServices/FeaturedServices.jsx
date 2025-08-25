import React, {forwardRef} from "react";
import "./FeaturedServices.css";

const FeaturedServices = forwardRef((props,ref) => {
  return (
    <div className="featured-services-container" ref={ref}  id="services">
      <div className="title">
        <h6>Our Services</h6>
        <h3>We are a one stop web design agency</h3>
      </div>
      <div className="cards">
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>

          <h6>Web Design</h6>
          <p>
            Transform your vision into reality with our custom website design
            services. We create websites that are not only visually stunning but
            also functional and user-friendly. With our responsive website
            design, your site will look and perform beautifully across all
            devices, ensuring a seamless experience for your users.
          </p>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>

          <h6>Web Development</h6>
          <p>
            Our web development team turns designs into dynamic, fully
            functional websites. From front-end to back-end development, we
            handle all aspects of web creation to ensure a seamless and
            efficient build. We handle all aspects of development, including
            front-end and back-end coding, database integration, and custom
            functionality.
          </p>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
            />
          </svg>
          <h6>Graphic Design</h6>
          <p>
            Our creative graphic design services bring your brand to life with
            visually engaging materials. Whether you need a new logo, marketing
            collateral, or social media graphics, we create designs that
            captivate and communicate effectively.We help establish a strong
            brand identity through branding and identity design services. From
            logo creation to complete brand guidelines, we craft a visual
            identity that sets you apart in your industry.
          </p>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
            />
          </svg>

          <h6>Digital Marketing & SEO Optimization</h6>
          <p>
            Boost your online visibility with our affordable SEO optimization.
            Our search engine optimization agency employs SEO marketing
            strategies to ensure you rank higher in search results. Maximize
            your ROI with our expert Pay-Per-Click Advertising (PPC) Management,
            which targets the right audience for your business. Our content
            marketing services create compelling content that resonates with
            your audience and supports your overall digital marketing strategy
          </p>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <h6>Domain Registration & Web Hosting</h6>
          <p>
            Secure your online identity with our affordable domain registration
            services. We offer a range of options, including buying a domain
            name, registering a domain for your website, and business domain
            registration. Choose from our reliable web hosting services,
            including affordable web hosting, secure web hosting, and
            specialized hosting services for scalable and flexible solutions.
          </p>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-book"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <path d="M3 6l0 13" />
            <path d="M12 6l0 13" />
            <path d="M21 6l0 13" />
          </svg>

          <h6>Website Content Writing</h6>
          <p>
            Engage and inform your visitors with our expert website content
            writing services. We craft clear, compelling, and SEO-friendly
            content that captures your brand’s voice and enhances user
            experience. Develop a robust content strategy with our expert
            guidance. We help plan, create, and manage content that aligns with
            your business objectives and engages your target audience.
          </p>
        </div>
      </div>
    </div>
  );
});

export default FeaturedServices;
