import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productMock from '../../mocks/product.mock';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Verifica se o endpoint cria e retorna um novo produto', async function () {
    // Arrange
    const httpRequestBody = productMock.mockedProduct;
    const createdProduct = productMock.mockedProductWithId;
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build(createdProduct));

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.deep.equal(createdProduct);
  });

});
