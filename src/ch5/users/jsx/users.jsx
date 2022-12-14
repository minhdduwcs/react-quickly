class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.setState({
      users: [
        {
          "id": 1,
          "first_name": "Patrick",
          "last_name": "Kim",
          "email": "pkim0@twitter.com",
          "gender": "Male",
          "ip_address": "96.145.80.132"
        }, {
          "id": 2,
          "first_name": "Julia",
          "last_name": "Gordon",
          "email": "jgordon1@google.com.au",
          "gender": "Female",
          "ip_address": "164.174.125.92"
        }, {
          "id": 3,
          "first_name": "Kathleen",
          "last_name": "Armstrong",
          "email": "karmstrong2@reference.com",
          "gender": "Female",
          "ip_address": "148.128.238.84"
        }, {
          "id": 4,
          "first_name": "Betty",
          "last_name": "Garcia",
          "email": "bgarcia3@purevolume.com",
          "gender": "Female",
          "ip_address": "117.71.246.128"
        }, {
          "id": 5,
          "first_name": "Wanda",
          "last_name": "Ross",
          "email": "wross4@amazon.co.uk",
          "gender": "Female",
          "ip_address": "101.153.132.101"
        }, {
          "id": 6,
          "first_name": "Mark",
          "last_name": "Lopez",
          "email": "mlopez5@newsvine.com",
          "gender": "Male",
          "ip_address": "130.186.223.106"
        }, {
          "id": 7,
          "first_name": "Katherine",
          "last_name": "Carroll",
          "email": "kcarroll6@exblog.jp",
          "gender": "Female",
          "ip_address": "48.159.239.241"
        }, {
          "id": 8,
          "first_name": "Jonathan",
          "last_name": "Harris",
          "email": "jharris7@hp.com",
          "gender": "Male",
          "ip_address": "121.101.33.233"
        }, {
          "id": 9,
          "first_name": "Christina",
          "last_name": "Gardner",
          "email": "cgardner8@goo.gl",
          "gender": "Female",
          "ip_address": "142.233.177.121"
        }, {
          "id": 10,
          "first_name": "Sandra",
          "last_name": "Sanchez",
          "email": "ssanchez9@github.io",
          "gender": "Female",
          "ip_address": "78.27.23.245"
        }
      ]
    });
  }

  render() {
    return (
      <div className="container">
        <h1>List of Users</h1>
        <table className="table-striped table-condensed table table-bordered table-hover">
          <tbody>
            {this.state.users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.first_name} {user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.ip_address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
