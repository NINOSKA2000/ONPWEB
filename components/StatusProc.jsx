import React from "react";
import styles from "../styles/proces.module.scss";

import Circle from "./progres/circle";

const StatusProc = () => {
  return (
    <div className={styles.proces}>
      <div className={styles.proces_numbers}>
        <h1> Hola, Jose Luis!</h1>
        <p>Te presentamos el estado de tus trámites.</p>
        <p>DNI : 45871245 </p>
        <p>Correo: joseluis@gmail.com</p>
      </div>
      <div className={styles.proces_button}>
        <button className={styles.buttonBlue}> Nueva consulta</button>
      </div>

      <div>

  <div className={styles.container}>

  <ul >
    <li className={styles.container_header}>
      <div className="col col-1">Solicitudes presentadas</div>
      <div className="col col-2">Avance</div>
      <div className="col col-3">Etapa</div>
      <div className="col col-4">Estado</div>
    </li>

    <li className={styles.container_main} >
      <div className={styles.col1}>
          <p> Solicitud de pensión de Jubilación</p>
          <p>Fecha: 12/04/2022</p>
          <p>Código de solicitud: 110413521425-2022-OSV</p>
      </div>
      <div className={styles.col2} >John Doe</div>
      <div className={styles.col3}> etapa</div>
      <div className={styles.col4}>Pending</div>
    </li>

    <li >
      <div className="col col-1" data-label="Job Id">42442</div>
      <div className="col col-2" data-label="Customer Name">Jennifer Smith</div>
      <div className="col col-3" data-label="Amount">$220</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
    </li>
    <li >
      <div className="col col-1" data-label="Job Id">42257</div>
      <div className="col col-2" data-label="Customer Name">John Smith</div>
      <div className="col col-3" data-label="Amount">$341</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
    </li>

  </ul>
</div>

<Circle/>

      </div>
    </div>
  );
};

export default StatusProc;
