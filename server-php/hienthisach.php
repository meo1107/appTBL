<?php
$servername = "localhost";
$database = "app";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
 class sach{
 	public $key, $ts;
 	function sach($mas, $tens) {
 		$this->key=$mas;
		$this->ts= $tens;
		}
 }
// Check connection
 if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
 }
$sql = "SELECT `sach`.`mas`,`sach`.`tens`  FROM sach";
//$sql = "SELECT * FROM sach";
$result = $conn->query($sql);
 $dataSource= array();
/*$data = [];
while ($song = mysqli_fetch_assoc($result)) {
	$data[] = $song;
}
echo json_encode($data);*/


/*if ($result->num_rows >0) {
	while($row[] = $result->fetch_assoc()) {
 
		 $tem = $row;
		 
		 $json = json_encode($tem);
			}
			echo $json;
		} else {
 			echo "No Results Found.";
		}
mysqli_close($conn);*/
 while ($row = mysqli_fetch_assoc($result)) {
 	array_push($dataSource, new sach(
 		$row["mas"],
		$row["tens"]
 	));
 }
 echo json_encode($dataSource);

?>