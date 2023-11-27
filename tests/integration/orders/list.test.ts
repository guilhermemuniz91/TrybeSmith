import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('deve validar que é possível listar os pedidos', async function () {
    // Arrange
    const orderList = productMock.mockedOrder;

    // Act
    const mockReturn = [
      OrderModel.build({ id: 1, userId: 1 }),
      OrderModel.build({ id: 2, userId: 2 }),
    ];
    sinon.stub(OrderModel, 'findAll').resolves(mockReturn);
    const responseOrders = await chai.request(app).get('/orders');

    // Assert
    expect(responseOrders.status).to.be.equal(200);
    expect(responseOrders.body).to.be.deep.equal(orderList);
  });

});
