import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/apiDocumentation.css';

const ApiDocumentation: React.FC = () => {
  const [endpoints, setEndpoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEndpoints();
  }, []);

  const fetchEndpoints = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/endpoints');
      setEndpoints(response.data);
    } catch (error) {
      console.error('Error fetching API endpoints:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="api-documentation">
      <h2>Tài liệu API</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="endpoints">
          {endpoints.map((endpoint: any, index: number) => (
            <div key={index} className="endpoint">
              <h3>{endpoint.method} {endpoint.path}</h3>
              <p>{endpoint.description}</p>
              <h4>Parameters:</h4>
              <ul>
                {endpoint.parameters.map((param: any, idx: number) => (
                  <li key={idx}>
                    <strong>{param.name}</strong> ({param.type}) - {param.description}
                  </li>
                ))}
              </ul>
              <h4>Response:</h4>
              <pre>{JSON.stringify(endpoint.response, null, 2)}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiDocumentation;
