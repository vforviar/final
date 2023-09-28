import MultipleCarousel from '@/components/multiple'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  return (
    <>
      <div className='h-screen flex justify-center items-center md:hidden sm:hidden visible'>
        <div>

          <p className=' text-2xl '>Please Buka di laptop ya?</p>
          <p> karena versi hp nya acak acakan, belum aku rapihin hehe</p>
        </div>
      </div>
      <div className='md:visible invisible sm:invisible'>

        <div className='h-screen flex items-center justify-center '>

          <div className=' absolute z-40' >
            <audio autoPlay>
              <source src='assets/aud/ts.mp3' type='audio/mp3' />
              <source />
            </audio>
            <div className='grid grid-cols-1 gap-2 '>
              <p className=' font-serif md:text-5xl text-4xl md:tracking-[50px] tracking-[20px] text-center '>FINAL CHAPTER</p>
              <p className=' text-center tracking-wide md:text-base text-sm'>Clandestine X Metanoia </p>
            </div>
          </div>
          <MultipleCarousel />
        </div>


        <div className='flex justify-center items-center '>

          <div className='h-96 '>
            <p className='text-center text-5xl md:mb-20 mt-20 '>Our Wishlist</p>
            <div className='grid grid-cols-3 gap-x-36 gap-y-5 mx-14 '>

              <p className='text-2xl animate-pulse '>&bull; Campervan</p>
              <p className='text-2xl animate-pulse'>&bull; Street Feeding </p>
              <p className='text-2xl animate-pulse'>&bull; Jajan Bareng</p>
              <p className='text-2xl animate-pulse'>&bull; Keliling Bandung</p>
              <p className='text-2xl animate-pulse'>&bull; Gramedia Date</p>
              <p className='text-2xl animate-pulse'>&bull; Nonton Bareng</p>
              <p className='text-2xl animate-pulse'>&bull; Hadir di Wisuda</p>
              <p className='text-2xl animate-pulse'>&bull; Indomie Date</p>
              <p className='text-2xl animate-pulse'>&bull; Buat Film Bareng</p>

              {/* <audio autoplay controls >
              <source src="assets/aud/1.mp3" type="audio/mp3" />
            </audio> */}
            </div>
          </div>
        </div>

        <div className='my-52 mx-14'>
          <p className='text-7xl my-5'>01. Pertemuan</p>
          <div className='flex gap-20'>
            <div className='w-3/5'>
              <p>Juli 2022 tepatnya tanggal 12, hari dimana kita dipertemukan dengan sengaja oleh tuhan melalui sebuah platform Telegram. Kini artinya sudah setahun lebih kita mengenal satu sama lain walau tidak pernah saling bertemu. Tidak pernah terpikirkan sebelumnya aku akan bertemu dengan seseorang seperti kamu yang hadir dan mengubah banyak aspek dalam hidupku.
                Masih teringat bagaimana canggungnya aku ketika pertama kali chattan denganmu, dan aku masih ingat bagaimana tegangnya ketika aku berkomunikasi dengan perempuan di telpon untuk pertama kalinya.
              </p>
              <br />
              <p>Kita harus berterima kasih kepada Konser Tulus dan Pertandingan Timnas Bola karena berkat kedua hal itulah kita bisa dipertemukan. Jika saja pada waktu itu kamu kehabisan tiket nonton, atau bahkan jika saat itu Timnas telat tanding dan diundur, mungkin kita tidak akan berada di posisi seperti ini dan kamu bertemu dengan orang lain begitupun denganku sendiri. </p>
              <br />
              <p>Memang kamu itu unik sekali. Dari awal kita chattan, kamu langsung menebak kalo aku suka menulis atau membaca, padahal tidak ada clue sama sekali tentang hal itu. tapi, mungkin dari topik inilah kita sudah memperlihatkan ketertarikan satu sama lain untuk mengenal lebih dalam dan memutuskan untuk tidak meng skip pada saat itu. </p>

            </div>
            <div className='text-white grid grid-cols-2 opacity-10'>
              <Image className=''
                src={'/assets/images/o.jpg'}
                width={200}
                height={200}
                alt=''
              />
              <Image className=''
                src={'/assets/images/p.jpg'}
                width={200}
                height={200}
                alt=''
              />
              <Image className=''
                src={'/assets/images/c.jpg'}
                width={200}
                height={200}
                alt=''
              />
              <Image className=''
                src={'/assets/images/l.jpg'}
                width={200}
                height={200}
                alt=''
              />
            </div>

          </div>

        </div>
        <div className='my-52 mx-14'>
          <p className='text-7xl my-5 text-end'>02. Harapan</p>
          <div className='flex gap-20'>
            <div className='text-white grid grid-cols-2 opacity-10'>
              <Image className=''
                src={'/assets/images/d.jpg'}
                width={200}
                height={200}
                alt=''
              />
              <Image className=''
                src={'/assets/images/e.jpg'}
                width={200}
                height={200}
                alt=''
              />
              <Image className=''
                src={'/assets/images/f.jpg'}
                width={200}
                height={200}
                alt=''
              />
              <Image className=''
                src={'/assets/images/k.jpg'}
                width={200}
                height={200}
                alt=''
              />
            </div>
            <div className='w-3/5'>
              <p>Hari demi hari kenyamanan itu semakin nyata, satu sama lain sudah merasakan banyak kesamaan dari kita. Lalu seiring berjalannya waktu, banyak sekali cerita cerita yang kita bahas hingga membahas hal yang tidak penting sekalipun. tapi momen itulah yang akan selalu dirindukan ketika kita tidak bersama lagi. Setelah sekian lama, akhirnya kita melanjutkan komunikasi kita di Whatsapp. Namun kita melakuka komunikasi di dua platform sekaligus, tidak hanya satu saja.</p>
              <br />
              <p> Wishlist-Wishlist yang kita kumpulkan semakin banyak, lalu kita membayangkan semua hal tersebut jadi kenyataan, dari setinggi campervan hingga sesederhana indomie date. lucu memang ketika membayangkan momen momen indah tersebut, dimana aku pada waktu itu sering memberimu oleh oleh foto kemanapun aku berada dan apapun yang aku lakukan. begitupun denganmu, sekecil apapun masalahnya kamu selalu cerita padaku dan sering juga memberikan foto foto yang membuatku merasa dihargai. </p>
              <br />
              <p> Dan, aku masih teringat salah satu momen penting dalam hidupku. aku menangis tengah malam dengan sangat kencang, itu berkatmu. aku merasa didengarkan untuk pertama kalinya dalam hidupku, seakan akan bom waktu dalam diriku pecah pada malam itu. </p>

            </div>

          </div>

        </div>
        <div className='my-52 mx-14'>
          <p className='text-7xl my-5'>03. Realita</p>
          <div className='md:flex md:gap-20 grid grid-cols-1'>
            <div className='md:w-3/5'>
              <p>Semua hal diatas sekarang hanya tinggal kenangan yang akan sulit jika kita ingin ulang kembali. sedih? jelas sedih banget. Dulu ketika aku pulang dan pergi selalu laporan, sekarang gabisa. Dulu aku foto foto jalan terus kirim ke kamu, sekarang cuma bisa foto dan simpen aja. Dulu.. tiap jam tiap detik selalu membicarakan semua hal, dari yang kompleks hingga hal random. Dan yang paling terasa, dulu ketika aku tidak sempat menjawabmu 1-2 jam, kamu khawatir dan selalu bertanya tanya. sekarang? kita sudah seminggu lebih tidak saling berkomunikasi. </p>
              <br />
              <p>Aku sedih ketika sekarang bisa minum minuman bergula dan tidak ada yang melarang. aku sedih ketika tidak ada yang membuatku terjaga semalaman padahal mataku sudah ngantuk. aku sedih ketika tidak ada notif selamat pagi darimu ketika aku bangun. aku sedih ketika sekarang jarang sekali pergi ke atap. Dan, aku sedih sudah lama tidak mendengarkan ketawamu saat kita ngobrol.</p>
              <br />
              <p>Jujur, Aku bingung harus berbuat apa.. terkadang realita harus kita terima walaupun itu amat menyakitkan.</p>
              <br />
              <p>Aku rindu menerima foto foto selfie mu yang menggemaskan.</p>

            </div>
            <div className='text-white grid grid-cols-2 opacity-10 '>
              <Image className=''
                src={'/assets/images/g.jpg'}
                width={200}
                height={200}
                alt=''
              />
              <Image className=''
                src={'/assets/images/q.jpg'}
                width={200}
                height={200}
                alt=''
              />
              <Image className=''
                src={'/assets/images/i.jpg'}
                width={200}
                height={200}
                alt=''
              />
              <Image className=''
                src={'/assets/images/j.jpg'}
                width={200}
                height={200}
                alt=''
              />
            </div>

          </div>

        </div>
        <hr className='mx-32 my-20' />
        {/* <div className='mb-96 flex justify-center items-center'>

        <div className=' grid grid-cols-2 gap-32 '>

          <div className='bg-[#515151] w-40 h-16 flex rounded-xl'>
            <p className=' mx-auto text-2xl my-3'>Maaf</p>
          </div>
          <div className='bg-[#515151] w-40 h-16 flex rounded-xl'>
            <p className=' mx-auto text-2xl my-3'>Maaf</p>
          </div>



          <div className='bg-[#515151] w-40 h-16 flex rounded-xl'>
            <p className=' mx-auto text-2xl my-3'>Maaf</p>
          </div>
          <div className='bg-[#515151] w-40 h-16 flex rounded-xl'>
            <p className=' mx-auto text-2xl my-3'>Maaf</p>
          </div>

        </div>
      </div> */}
        <div className=''>
          <p className='text-7xl text-center'>Last Chapter</p>
          <p className='text-xl text-center mt-5'>Aku harap kamu buka ini</p>
        </div>
        <div className='h-24 mb-64 flex justify-center items-center'>
          <a href="/ungkapan">


            <div className='w-36 h-10 bg-button rounded-xl ' >

              <p className='text-center pt-2'>Pesan</p>
            </div>
          </a>

        </div>
      </div>
    </>
  )
}
