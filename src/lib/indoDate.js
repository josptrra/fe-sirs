export function getDateToday() {
  const today = new Date();

  // Set tanggal menjadi 00:00:00 untuk memastikan tanggalnya tidak terpengaruh oleh waktu
  today.setHours(0, 0, 0, 0);

  // Format tanggal sesuai dengan format 'YYYY-MM-DD'
  return today.toISOString().split('T')[0];
}
