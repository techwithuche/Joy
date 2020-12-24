import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-next-router';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import injectSaga from '../../../../utils/injectSaga';
import injectReducer from '../../../../utils/injectReducer';
// core components

import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import reducer from '../reducer';
import saga from '../saga';
import {
  makeSelectOne,
  makeSelectLoading,
  makeSelectErrors,
} from '../selectors';
import * as mapDispatchToProps from '../actions';
import BackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import PageHeader from '../../../../components/PageHeader/PageHeader';
import PageContent from '../../../../components/PageContent/PageContent';
import Loading from '../../../../components/Loading';
import Input from '../../../../components/customComponents/Input';

const styles = theme => ({
  backbtn: {
    padding: 0,
    height: '40px',
    width: '40px',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: '50%',
    marginRight: '5px',
  },
});

class AddEdit extends React.PureComponent {
  static propTypes = {
    loadOneRequest: PropTypes.func.isRequired,
    addEditRequest: PropTypes.func.isRequired,
    setOneValue: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    classes: PropTypes.object.isRequired,
    one: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.clearErrors();
    if (this.props.match.params && this.props.match.params.id) {
      this.props.loadOneRequest(this.props.match.params.id);
    }
  }

  handleChange = name => event => {
    event.persist();
    this.props.setOneValue({ key: name, value: event.target.value });
  };

  handleCheckedChange = name => event => {
    event.persist();
    this.props.setOneValue({ key: name, value: event.target.checked });
  };

  handleGoBack = () => {
    this.props.push('/admin/faq-cat-manage');
  };

  handleSave = () => {
    this.props.addEditRequest();
  };

  render() {
    const { classes, one, match, loading, errors } = this.props;
    return loading && loading == true ? (
      <Loading />
    ) : (
      <div>
        <Helmet>
          <title>
            {match && match.params && match.params.id
              ? 'Edit Faq Category'
              : 'Add Faq Category'}
          </title>
        </Helmet>
        <div className="flex justify-between mt-3 mb-3">
          <PageHeader>
            <IconButton
              className={`${classes.backbtn} cursor-pointer`}
              onClick={this.handleGoBack}
              aria-label="Back"
            >
              <BackIcon />
            </IconButton>{' '}
            {match && match.params && match.params.id
              ? 'Edit Faq Category'
              : 'Add Faq Category'}
          </PageHeader>
        </div>
        <PageContent>
          <div className="w-full md:w-1/2 pb-4">
          <Input
              label="Title"
              inputclassName="inputbox"
              inputid="title"
              name="Title"
              inputType="text"
              value={one.title}
              onChange={this.handleChange('title')}
              error={errors.title}
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={one.is_active || false}
                  tabIndex={-1}
                  onClick={this.handleCheckedChange('is_active')}
                  color="primary"
                />
              }
              label="Is Active"
            />
          </div>

          <button
            className="block btn bg-primary hover:bg-secondary"
            onClick={this.handleSave}
          >
            Save
          </button>
        </PageContent>
      </div>
    );
  }
}

const withStyle = withStyles(styles);

const withReducer = injectReducer({
  key: 'adminFaqCategoryManagePage',
  reducer,
});
const withSaga = injectSaga({ key: 'adminFaqCategoryManagePage', saga });

const mapStateToProps = createStructuredSelector({
  one: makeSelectOne(),
  loading: makeSelectLoading(),
  errors: makeSelectErrors(),
});

const withConnect = connect(
  mapStateToProps,
  { ...mapDispatchToProps, push },
);
export default compose(
  withStyle,
  withReducer,
  withSaga,
  withConnect,
)(AddEdit);
