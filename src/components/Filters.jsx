import React from 'react';

class Filters extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
    }
  }
	render() {
		return (
			<div className="container" data-testid="filters">
          <section className="filters" >
            <div className="filters__search">
              <input type="text" 
              className="filters__search__input"
              valeu= {this.state.name}
              onChange={(event) => this.setState({name: event.target.value})} 
              placeholder="Pesquisar" />

              <button className="filters__search__icon" onClick={() => this.props.handleChange(this.state.name)}>
                <i className="fa fa-search"/>
              </button>
            </div>

            <button className="filters__item " onClick={() => this.props.handleClick('name')}>
              Nome <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item" onClick={() => this.props.handleClick('country')}>
              País <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item" onClick={() => this.props.handleClick('company')}>
              Empresa <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item" onClick={() => this.props.handleClick('department')}>
              Departamento <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item" onClick={() => this.props.handleClick('admissionDate')}>
              Data de admissão <i className="fas fa-sort-down" />
            </button>
          </section>
        </div>
		);
	}
}

export default Filters;
 