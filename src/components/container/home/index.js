import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
//import Header from '../../assets/Header'
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import saga from './saga';
import reducer from './reducer';
import {
  makeSelectIsRequesting,
  makeSelectSuccess,
  makeSelectErrorMsg,
  makeSelectContactDetail,
} from './selectors';
import * as mapDispatchToProps from './actions';



class Home extends React.Component {
    state = { name: '', email: '', subject: '', message: '', reCaptcha: '' };

  
    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };
  
    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.success !== this.props.success && nextProps.success) {
        this.setState({ name: '', email: '', subject: '', message: '' }, () => {
          window.grecaptcha && window.grecaptcha.reset();
        });
      }
    }
  
    handleSave =  e => {
        e.preventDefault();
      this.props.saveContactRequest(this.state);
    };

  
    onChange = e => {
      this.setState({
        reCaptcha: e,
      });
    };
  
    render() {
      const { isRequesting, contactDetail } = this.props;
      const { name, email, subject, message } = this.state;

    return (
       <>

<div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="tm-content">
              <section class="tm-section tm-section-0">
                <h2 class="tm-section-title mb-3 font-weight-bold">
                  Introduction
                </h2>
                <div class="tm-textbox tm-bg-dark">
                  <p>
                  I'm a Seasoned creative developer, with experience working in the marketing and technology industry. 
                               I am constantly on te look out for innovative ideas to creating pieces and products that works. 
                  </p>
                  <p class="mb-0">
                  I am passionate about my work; Because i love what i do, i have a steady source of motivation that drives me to 
                                do my best. Ths passion led me to challange myself daily and learn new skills that helped me to do better works.
                  </p>
                </div>
                <a href="#" id="tm_about_link" data-linkid="1" class="tm-link">Read More</a>
              </section>


             
              <section class="tm-section tm-section-1">
                <div class="tm-textbox tm-textbox-2 tm-bg-dark">
                  <h2 class="tm-text-blue mb-4">About Me</h2>
                  <p class="mb-4">
                  I'm a Seasoned creative developer, with experience working in the marketing and technology industry. 
                  I am constantly on te look out for innovative ideas to creating pieces and products that works. 
                  
                  </p>
                  <p class="mb-4">
                  I am passionate about my work; Because i love what i do, i have a steady source of motivation that drives me to 
                 do my best. Ths passion led me to challange myself daily and learn new skills that helped me to do better works.
                  
                  </p>
                  <a
                    href="#"
                    id="tm_work_link"
                    data-linkid="2"
                    class="tm-link m-0"
                    >Next</a>
                </div>
              </section>

            
              <section class="tm-section tm-section-2 mx-auto">
                <div class="grid tm-gallery">
                 
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/04.jpg" alt="Stairs" class="" />
                    <figcaption>
                      <h2>
                        Blog 
                        <span>One</span>
                      </h2>
                      <p>Blog One short decription.</p>
                      <a href="img/04.jpg">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/05.jpg" alt="Image 5" class="" />
                    <figcaption>
                    <h2>
                        Blog 
                        <span>Two</span>
                      </h2>
                      <p>Blog Two short decription.</p>
                      <a href="img/05.jpg">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/06.jpg" alt="Image 6" class="" />
                    <figcaption>
                    <h2>
                        Blog 
                        <span>Three</span>
                      </h2>
                      <p>Blog Three short decription.</p>
                      <a href="img/06.jpg">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/07.jpg" alt="Image 7" class="" />
                    <figcaption>
                    <h2>
                        Blog 
                        <span>Four</span>
                      </h2>
                      <p>Blog Four short decription.</p>
                      <a href="img/07.jpg">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/08.jpg" alt="Image 8" class="" />
                    <figcaption>
                    <h2>
                        Blog 
                        <span>Five</span>
                      </h2>
                      <p>Blog Five short decription.</p>
                      <a href="img/08.jpg">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/09.jpg" alt="Image 9" class="" />
                    <figcaption>
                    <h2>
                        Blog 
                        <span>Six</span>
                      </h2>
                      <p>Blog Six short decription.</p>
                      <a href="img/09.jpg">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/10.jpg" alt="Image 10" class="" />
                    <figcaption>
                    <h2>
                        Blog 
                        <span>Seven</span>
                      </h2>
                      <p>Blog Seven short decription.</p>
                      <a href="img/10.jpg">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/11.jpg" alt="Image 11" class="" />
                    <figcaption>
                    <h2>
                        Blog 
                        <span>Eight</span>
                      </h2>
                      <p>Blog Eight short decription.</p>
                      <a href="img/11.jpg">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/12.jpg" alt="Image 12" class="" />
                    <figcaption>
                    <h2>
                        Blog 
                        <span>Nine</span>
                      </h2>
                      <p>Blog Nine short decription.</p>
                      <a href="img/12.jpg">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/01.jpg" alt="Image 1" class="" />
                    <figcaption>
                    <h2>
                        Blog 
                        <span>Ten</span>
                      </h2>
                      <p>Blog Ten short decription.</p>
                      <a href="img/01.jpg">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/02.jpg" alt="Pretty Girl" class="" />
                    <figcaption>
                    <h2>
                        Blog 
                        <span>Eleven</span>
                      </h2>
                      <p>Blog Eleven short decription.</p>
                      <a href="img/02.jpg">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="effect-goliath tm-gallery-item">
                    <img src="img/03.jpg" alt="Red Flowers" class="" />
                    <figcaption>
                    <h2>
                        Blog 
                        <span>Twelve</span>
                      </h2>
                      <p>Blog Twelve short decription.</p>
                      <a href="img/03.jpg">View more</a>
                    </figcaption>
                  </figure>
                </div>
              </section>

              <section class="tm-section tm-section-3 tm-section-left">
                <form action="/" method="post" class="tm-contact-form">
                  <div class="form-group mb-4">
                    <input
                      type="text"
                      id="contact_name"
                      name="contact_name"
                      class="form-control"
                      value={name}
                      onChange={this.handleChange('name')}  
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div class="form-group mb-4">
                    <input
                      type="email"
                      id="contact_email"
                      name="contact_email"
                      class="form-control"
                      value={email}
                     onChange={this.handleChange('email')} 
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="form-group mb-4">
                    <textarea
                      rows="4"
                      id="contact_message"
                      name="contact_message"
                      class="form-control"
                      placeholder="Message"
                      value={message}
                      onChange={this.handleChange('message')}

                      required
                    ></textarea>
                  </div>
                  <div class="form-group mb-0">
                    <button type="submit" disabled={isRequesting} onClick={this.handleSave} class="btn tm-send-btn tm-fl-right">
                      Send
                    </button>
                  </div>
                </form>
              </section>



</div>
</div>
</div>
</div>

       </>
       )
}
}

Home.propTypes = {
    saveContactRequest: PropTypes.func.isRequired,
    ContactDetailRequest: PropTypes.func.isRequired,
  };
                                                        
  const mapStateToProps = createStructuredSelector({
    isRequesting: makeSelectIsRequesting(),
    success: makeSelectSuccess(),
    error: makeSelectErrorMsg(),
    contactDetail: makeSelectContactDetail(),
  });
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
  const withReducer = injectReducer({ key: 'index', reducer });
  const withSaga = injectSaga({ key: 'index', saga });
 
  
  export default compose(
    withReducer,
    withSaga,
    withConnect,
  )(Home);
