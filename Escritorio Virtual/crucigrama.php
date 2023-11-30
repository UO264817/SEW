<?php
class Record
{
    protected $server;
    protected $user;
    protected $pass;
    protected $dbname;

    public function __construct()
    {
        $this->server = 'localhost';
        $this->user = 'DBUSER2023';
        $this->pass = 'DBPSWD2023';
        $this->dbname = 'records';
        //$this->postRecord();
        $this->showTopTen(0);
    }

    public function createRecordForm()
    {
        echo "
        <form action='#' method='post' name='record'>
            <label for='nombre'>Nombre</label>
                <input type='text' name='nombre' value='' id='nombre'/>
            <label for='apellido'>Apellido</label>
                <input type='text' name='apellido' value='' id='apellido'/>
            <label for='dificultad'>Dificultad</label>
                <input type='text' name='dificultad' value='0' id='dificultad' readonly/>
            <label for='tiempo'>Tiempo</label>
                <input type='text' name='tiempo' value='10' id='tiempo' readonly/>
            <input type='submit'  value='Publicar Record'/>
        </form>
    ";
    }

    public function postRecord()
    {
        //Solo se ejecutará si se han enviado los datos desde el formulario al pulsar el boton Calcular
        if (count($_POST) > 0) {
            $nombre = $_POST["nombre"];
            $apellido = $_POST["apellido"];
            $tiempo = $_POST["tiempo"];
            $dificultad = $_POST["dificultad"];
            try {
                $mysqli = new mysqli($this->server, $this->user, $this->pass, $this->dbname);
                $mysqli->query("CREATE TABLE IF NOT EXISTS records (nombre varchar(255), apellido varchar(255), tiempo INT, dificultad INT)");
                $sentencia = $mysqli->prepare("INSERT INTO records(nombre, apellido, tiempo, dificultad) VALUES (?,?,?,?)");
                $sentencia->bind_param('ssdd', $nombre, $apellido, $tiempo, $dificultad);
                $sentencia->execute();
                echo '<p>Record salvado correctamente</p>';
            } catch (Exception $e) {
                echo "Error: " . $e->getMessage();
            }
        }
    }

    public function showTopTen($dificultad)
    {
        $mysqli = new mysqli($this->server, $this->user, $this->pass, $this->dbname);
        $sentencia = $mysqli->prepare("SELECT * FROM records WHERE dificultad = 0 ORDER BY tiempo LIMIT 10");
        //$sentencia->bind_param("d", $this->$dificultad);
        $sentencia->execute();

        $records = $sentencia->get_result();
        echo '<table><tbody>';
        while ($row = $records->fetch_array()) {
            echo '<tr><th>' . $row['nombre'] . '</th><th>' . $row['apellido'] . '</th><th>' . $row['tiempo'] . '</th></tr>';
        }
        echo '</tbody></table>';
    }
}

$r = new Record();
$r->createRecordForm();
?>