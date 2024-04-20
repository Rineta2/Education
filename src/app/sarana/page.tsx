import { headingSarana } from '@/components/Data/Data'

import '@/components/scss/Profil.scss'
export default function Sarana() {
  return (
    <section className="sarana">

      <div className="sarana__container container grid">

        {
          headingSarana.map((item) => (
            <div className="heading">
              <h1>{item.title}</h1>
              <span>{item.desc}</span>
            </div>
          ))
        }

        <div className="data">
          <table>
            <tr className='head'>
              <th>No</th>
              <th>Jenis Sarpras</th>
              <th>Semester 2023/2024 Ganjil</th>
              <th>Semester 2023/2024 Genap</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Ruang Kelas</td>
              <td>29</td>
              <td>29</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Ruang Perpustakaan</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Ruang Laboratorium</td>
              <td>2</td>
              <td>2</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Ruang Praktik</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Ruang Praktik</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>6</td>
              <td>Ruang Pimpinan</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>7</td>
              <td>Ruang Guru</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>8</td>
              <td>Ruang Ibadah</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>9</td>
              <td>Ruang UKS</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>10</td>
              <td>Ruang Toilet</td>
              <td>22</td>
              <td>22</td>
            </tr>

            <tr>
              <td>11</td>
              <td>Ruang Gudang</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>12</td>
              <td>Ruang Sirkulasi</td>
              <td>2</td>
              <td>2</td>
            </tr>

            <tr>
              <td>13</td>
              <td>Ruang TU</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>14</td>
              <td>Ruang Konseling</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>14</td>
              <td>Ruang OSIS</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Jumlah</td>
              <td>109</td>
              <td>109</td>
            </tr>
          </table>
        </div>

      </div>

    </section>
  )
}
