import '@/components/Cities/CitiesList.css';
import Link from 'next/link';

const CitiesList = () => {
  return (
    <div className='cities'>
        <div className="title">Cities</div>
        <div className="city-list">
            <div className="city-card">
                <div className="city-card-body">
                    <div className="card-img">
                        <Link href={'/cities/city'}>
                            <img src="https://www.bilimevi.com/images/dosyalar/400px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="city-name">
                    <Link href={'s'}>Paris</Link>
                </div>
            </div>
            <div className="city-card">
                <div className="city-card-body">
                    <div className="card-img">
                        <Link href={'/cities/city'}>
                            <img src="https://www.bilimevi.com/images/dosyalar/400px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="city-name">
                    <Link href={'s'}>Paris</Link>
                </div>
            </div>
            <div className="city-card">
                <div className="city-card-body">
                    <div className="card-img">
                        <Link href={'/cities/city'}>
                            <img src="https://www.bilimevi.com/images/dosyalar/400px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="city-name">
                    <Link href={'s'}>Paris</Link>
                </div>
            </div>
            <div className="city-card">
                <div className="city-card-body">
                    <div className="card-img">
                        <Link href={'/cities/city'}>
                            <img src="https://www.bilimevi.com/images/dosyalar/400px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="city-name">
                    <Link href={'s'}>Paris</Link>
                </div>
            </div>
            <div className="city-card">
                <div className="city-card-body">
                    <div className="card-img">
                        <Link href={'/cities/city'}>
                            <img src="https://www.bilimevi.com/images/dosyalar/400px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="city-name">
                    <Link href={'s'}>Paris</Link>
                </div>
            </div>
            <div className="city-card">
                <div className="city-card-body">
                    <div className="card-img">
                        <Link href={'/cities/city'}>
                            <img src="https://www.bilimevi.com/images/dosyalar/400px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="city-name">
                    <Link href={'s'}>Paris</Link>
                </div>
            </div>
            <div className="city-card">
                <div className="city-card-body">
                    <div className="card-img">
                        <Link href={'/cities/city'}>
                            <img src="https://www.bilimevi.com/images/dosyalar/400px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="city-name">
                    <Link href={'s'}>Paris</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CitiesList