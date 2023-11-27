import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginMock from '../../mocks/login.mock';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Verifica se retornará um erro caso o campo "username" não receber nenhum valor', async function () {
    // Arrange
    const httpRequestBody = loginMock.noUsernameLoginBody

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
});

it('Verifica se retornará um erro caso o campo "password" não receber nenhum valor', async function () {
  // Arrange
  const httpRequestBody = loginMock.noPasswordLoginBody

  // Act
  const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

  // Assert
  expect(httpResponse.status).to.equal(400);
  expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
});

it('Verifica se retornará um erro caso o campo username receba um valor não cadastrado', async function () {
  // Arrange
  const httpRequestBody = loginMock.notExistingUserBody
  sinon.stub(UserModel, 'findOne').resolves(null);

  // Act
  const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

  // Assert
  expect(httpResponse.status).to.equal(401);
  expect(httpResponse.body).to.be.deep.equal({ "message": "Username or password invalid" });
});

});
