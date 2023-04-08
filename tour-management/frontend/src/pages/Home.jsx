import React from 'react';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeatureTourList from '../components/Feature-tours/FeatureTourList';
import experienceImg from '../assets/images/experience.png';
import MasonryImageGallery from '../components/Image-gallery/MasonryImageGallery';
import Testimonial from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
    { /*================= hero section start ===================*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center ">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling opens the door to creating <span className="highlight"> memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maxime consequuntur, officia fuga nemo corporis temporibus neque harum molestias consequatur velit. Cupiditate, dolorem eaque nam quidem harum non optio nulla.</p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>
    { /*================= hero section end ===================*/}
    <section>
      <Container>
        <Row>
          <Col lg="3">
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className="services_title">We offers your best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>
    { /*================= Feature section end ===================*/}
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title">Our featured tour</h2>
          </Col>
          <FeatureTourList />
        </Row>
      </Container>
    </section>
    { /*================= Feature section end ===================*/}

    { /*================= Feature section end ===================*/}

    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <Subtitle subtitle={"Experience"} />

              <h2>
                With you all experience <br /> we will serve you
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br />
                Quas aliman, hic temporia inventore suscipit unde.
              </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Year experience</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experience__img"><img src={experienceImg} alt="" /></div>
          </Col>
        </Row>
      </Container>
    </section>

    { /*================= Feature section end ===================*/}

    { /*=================gallery section start =================*/}

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery__title">
              Visit our custumers tour gallery
            </h2>
          </Col>
          <Col lg="12">
            <MasonryImageGallery />
          </Col>
        </Row>
      </Container>
    </section>

    { /*=================gallery section end =================*/}

    { /*=================testimonial section start =================*/}

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={'Fans Love'} />
            <h2 className="testimonial__title">What our fans say about us</h2>
          </Col>
          <Col lg="12">
            <Testimonial />
          </Col>
        </Row>
      </Container>
    </section>

    { /*=================testimonial section end =================*/}
    <Newsletter />
  </>
}

export default Home