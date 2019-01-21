import React from 'react';
import { shallow } from 'enzyme';
import AddOrderForm from '../AddOrderForm';
import FormErrors from '../FormErrors';

const order = {
  orderId: 'xyz987',
  userId: '1',
  quantity: 22,
  price: 230,
  type: 'BUY',
  error: ''
}
describe('Add order form component', () => {
  it('should render form', () => {
    const wrapper = shallow(<AddOrderForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render form', () => {
    const wrapper = shallow(<AddOrderForm />);
    expect(wrapper.containsMatchingElement(<FormErrors />)).toBe(true);
  });

  it('should render form correctly with order', () => {
    const wrapper = shallow(<AddOrderForm order={order} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render place order button', () => {
    const wrapper = shallow(<AddOrderForm />);
    expect(wrapper.find('button').text()).toEqual("Place Order");
  });

  it('should set user id on input change', () => {
    const value = 'user2';
    const wrapper = shallow(<AddOrderForm />);
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('userId')).toBe(value);
  });

  it('should set quantity on quantity change', () => {
    const value = "3";
    const wrapper = shallow(<AddOrderForm />);
    wrapper.find('input').at(2).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('quantity')).toBe(value);
  });

  it('should not set quantity if invalid input', () => {
    const value = '12.1223333333';
    const wrapper = shallow(<AddOrderForm />);
    wrapper.find('input').at(2).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('price')).toBe('');
  });

  it('should set price if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<AddOrderForm />);
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('price')).toBe(value);
  });

  it('should not set price if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<AddOrderForm />);
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('price')).toBe('');
  });

  it('should set type', () => {
    const value = 'SELL';
    const wrapper = shallow(<AddOrderForm />);
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(wrapper.state('type')).toBe(value);
  });

  it('should call onSubmit prop for valid form submission', (done) => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<AddOrderForm onSubmit={onSubmitSpy} />);
    wrapper.setState({quantity: 123.23, price: 12.23, userId: '222', type: "BUY", noErrors: true});
    wrapper.setState({formErrors: {
      parameters: '',
      positiveNumber: '',
      stringCheck: '',
      typeCheck: ''
    }})
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    setTimeout(() => {
      expect(onSubmitSpy).toHaveBeenLastCalledWith({
        "orderId": "000000000000",
        "price": "12.23",
        "quantity": 123.23,
        "type": "BUY",
        "userId": "222"
      });
      done();
    })
  });

  it('should not call onSubmit prop for invalid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<AddOrderForm onSubmit={onSubmitSpy} />);
    wrapper.setState({quantity: 123.23, price: 0, userId: '222', type: "BUY", noErrors: true});
    wrapper.setState({formErrors: {
      parameters: '',
      positiveNumber: '',
      stringCheck: '',
      typeCheck: ''
    }})
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });
});

describe('Validator methods', () => {
  it('noErrors method should set noErrors state', () => {
    const wrapper = shallow(<AddOrderForm />);
    wrapper.instance().noErrors(true)
    expect(wrapper.state().noErrors).toBe(true)
    wrapper.instance().noErrors(false)
    expect(wrapper.state().noErrors).toBe(false)
  })
  it('errorsChecker should call noErrors with false', () => {
    const wrapper = shallow(<AddOrderForm />);
    wrapper.setState({formErrors: {
      parameters: 'error',
      positiveNumber: 'error2',
      stringCheck: '',
      typeCheck: ''
    }})
    wrapper.instance().errorsChecker()
    expect(wrapper.state().noErrors).toBe(false)
  })
  it('errorsChecker should call noErrors with true', () => {
    const wrapper = shallow(<AddOrderForm />);
    wrapper.setState({formErrors: {
      parameters: '',
      positiveNumber: '',
      stringCheck: '',
      typeCheck: ''
    }});
    wrapper.instance().errorsChecker()
    expect(wrapper.state().noErrors).toBe(true)
  })
  it('typeCheck should update state', () => {
    const wrapper = shallow(<AddOrderForm />);
    wrapper.setState({type: "BUY"});
    wrapper.instance().typeCheck();
    expect(wrapper.state().formErrors.typeCheck).toBe('')
    wrapper.setState({type: "sadf"});
    wrapper.instance().typeCheck();
    expect(wrapper.state().formErrors.typeCheck).toEqual(`Please ensure type is either "BUY" or "SELL". `)
  })

  it('stringCheck should update state', () => {
    const wrapper = shallow(<AddOrderForm />);
    wrapper.setState({userId: "123abd", type: "BUY"});
    wrapper.instance().stringCheck();
    expect(wrapper.state().formErrors.stringCheck).toBe('')
    wrapper.setState({userId: 23, type: "BUY"});
    wrapper.instance().stringCheck();
    expect(wrapper.state().formErrors.stringCheck).toEqual("Please ensure both userid and order type are strings. ")
  })
  it('positiveNumber should update state', () => {
    const wrapper = shallow(<AddOrderForm />);
    wrapper.setState({quantity: 123, price: 12});
    wrapper.instance().positiveNumber();
    expect(wrapper.state().formErrors.positiveNumber).toBe('')
    wrapper.setState({quantity: 0, price: 12});
    wrapper.instance().positiveNumber();
    expect(wrapper.state().formErrors.positiveNumber).toEqual("Please ensure both quantity and price are positive numbers. ")
  })
  it('parametersCheck should update state', () => {
    const wrapper = shallow(<AddOrderForm />);
    wrapper.setState({quantity: '123', price: '12', userId: '222', type: "BUY"});
    wrapper.instance().parametersCheck();
    expect(wrapper.state().formErrors.parameters).toBe('')
    wrapper.setState({quantity: '123', price: '12', userId: '', type: "BUY"});
    wrapper.instance().parametersCheck();
    expect(wrapper.state().formErrors.parameters).toEqual("Please fill in all fields of the form. ")
  })
})
