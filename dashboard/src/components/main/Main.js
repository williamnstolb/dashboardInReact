import Hello from '../../Assets/hello.svg'
// import Chart from '../charts/Chart'
import './Main.css'

const Main = () => {
  return (
    <main>
      <div className="main-container">
        <div className="main-title">
          <img src={Hello} alt="Hello" />
          <div className="main-greeting">
            <h1>Olá, meu nome é</h1>
            <p>Bem vindo ao seu painel</p>
          </div>
        </div>
        <div className="main-cards">
          <div className="card">
            <i className="fa fa-file-text fa-2x text-lightblue"></i>
            <div className="card-inner">
              <p className="text-primary-p">Número de pedidos</p>
              <span className="font-bold text-title">1.000</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-money fa-2x text-red"></i>
              <div className="card-inner">
                <p className="text-primary-p">Pagamentos</p>
                <span className="font-bold text-title">R$ 2.467,00</span>
              </div>
          </div>
          <div className="card">
            <i className="fa fa-money fa-2x text-yellow"></i>
              <div className="card-inner">
                <p className="text-primary-p">Pagamentos</p>
                <span className="font-bold text-title">R$ 2.467,00</span>
              </div>
          </div>
          <div className="card">
            <i className="fa fa-bars fa-2x text-green"></i>
              <div className="card-inner">
                <p className="text-primary-p">Categorias</p>
                <span className="font-bold text-title">40</span>
              </div>
          </div>
        </div>
        <div className="charts">
          <div className="chart-left">
            <div className="chart-left-title">
              <div >
                <h1 >Daily Reports</h1>
                <h1 >João Pessoa, Paraíba, BR</h1>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            {/* <Chart /> */}
          </div>
          <div className="charts-right">
          <div className="chart-right-title">
              <div >
                <h1 >Daily Reports</h1>
                <h1 >João Pessoa, Paraíba, BR</h1>
              </div>
              <i className="fa fa-area-chart"></i>
            </div>
            <div className='charts-right-cards'>
              <div className="card1">
                <h1>Lucros</h1>
                <p>R$ 2.500,00</p>
              </div>
              <div className="card2">
                <h1>Pagamentos</h1>
                <p>R$ 250,00</p>
              </div>
              <div className="card3">
                <h1>Custo de hospedagem</h1>
                <p>R$ 150,00</p>
              </div>
              <div className="card4">
                <h1>Banco de dados</h1>
                <p>R$ 190,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;