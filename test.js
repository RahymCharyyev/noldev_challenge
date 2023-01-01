const challenges = require('./challenge')

const testCases1 = [
    {
        input: {
            a: 1
        },
        output: {
            a: 1
        }
    },
    {
        input: {
            a: {
                aa: {
                    aaa: {
                        aaaa: {
                            aaaaaa: false
                        }
                    }
                }
            },
            b: {
                bb: ["bbb"]
            }
        },
        output: {
            'a.aa.aaa.aaaa.aaaaa': false,
            'b.bb': ["bbb"]
        }
    }
]

test.each(testCases1)('Test Challenge 1', ({input, output}) => {
    expect(challenges.challenge1(input)).toStrictEqual(output)
});


const testCase2 = {
    output:{
        AR: {
          male: [
            'Bernardo Houssay',
            'César Milstein',
            'Carlos Saavedra Lamas',
            'Adolfo Pérez Esquivel'
          ]
        },
        AT: { male: [ 'Martin Karplus', 'Peter Handke', 'Anton Zeilinger' ] },
        AU: { female: [ 'Elizabeth H. Blackburn' ] },
        AZ: { male: [ 'Lev Landau' ] },
        BA: { male: [ 'Vladimir Prelog', 'Ivo Andric' ] },
        BD: { male: [ 'Muhammad Yunus' ] },
        BE: {
          male: [
            'Jules Bordet',
            'Corneille Heymans',
            'Albert Claude',
            'Auguste Beernaert',
            'Henri La Fontaine',
            'Georges Pire',
            'Maurice Maeterlinck',
            'Yves Chauvin',
            'François Englert'
          ]
        },
        BG: { male: [ 'Elias Canetti' ] },
        BR: { male: [ 'Peter Medawar' ] },
        BY: {
          male: [
            'Menachem Begin',
            'Shimon Peres',
            'Simon Kuznets',
            'Zhores Alferov'
          ]
        },
        CA: { male: [ 'James Peebles', 'David Card' ] },
        CD: { male: [ 'Denis Mukwege' ] },
        CH: {
          male: [
            'Charles Edouard Guillaume',
            'Felix Bloch',
            'Heinrich Rohrer',
            'K. Alex Müller',
            'Richard R. Ernst',
            'Theodor Kocher',
            'Paul Müller',
            'Walter Hess',
            'Daniel Bovet',
            'Werner Arber',
            'Rolf M. Zinkernagel',
            'Henry Dunant',
            'Élie Ducommun',
            'Albert Gobat',
            'Carl Spitteler',
            'Kurt Wüthrich',
            'Jacques Dubochet',
            'Michel Mayor',
            'Didier Queloz'
          ]
        },
        CL: { male: [ 'Pablo Neruda' ] },
        CN: { female: [ 'Youyou Tu' ] },
        CO: { male: [ 'Gabriel García Márquez', 'Juan Manuel Santos' ] },
        CR: { male: [ 'Oscar Arias Sánchez' ] },
        CY: { male: [ 'Christopher A. Pissarides' ] },
        CZ: { male: [ 'Jaroslav Seifert', 'Peter Grünberg' ] },
        DE: {
          male: [
            'Heinrich Böll',
            'Herbert Kroemer',
            'Wolfgang Ketterle',
            'Theodor W. Hänsch',
            'Robert J. Aumann',
            'Gerhard Ertl',
            'Harald zur Hausen',
            'Thomas C. Südhof',
            'Rainer Weiss',
            'Joachim Frank',
            'John Goodenough',
            'Reinhard Genzel',
            'Klaus Hasselmann',
            'Benjamin List'
          ]
        },
        DK: { male: [ 'Johannes V. Jensen', 'Morten Meldal' ] },
        DZ: { male: [ 'Claude Cohen-Tannoudji', 'Albert Camus' ] },
        EG: {
          male: [
            'Ahmed Zewail',
            'Anwar al-Sadat',
            'Yasser Arafat',
            'Naguib Mahfouz',
            'Mohamed ElBaradei'
          ]
        },
        ES: {
          male: [
            'Santiago Ramón y Cajal',
            'Severo Ochoa',
            'José Echegaray',
            'Jacinto Benavente',
            'Juan Ramón Jiménez',
            'Vicente Aleixandre',
            'Camilo José Cela'
          ]
        },
        ET: { male: [ 'Abiy Ahmed Ali' ] },
        FI: {
          male: [
            'Artturi Virtanen',
            'Ragnar Granit',
            'Frans Eemil Sillanpää',
            'Martti Ahtisaari',
            'Bengt Holmström'
          ]
        },
        FR: { female: [ 'Annie Ernaux' ] },
        GB: {
          male: [
            'John Hume',
            'David Trimble',
            'John Galsworthy',
            'Bertrand Russell',
            'Winston Churchill',
            'Patrick White',
            'William Golding',
            'Seamus Heaney',
            'John R. Hicks',
            'James E. Meade',
            'Richard Stone',
            'Ronald H. Coase',
            'James A. Mirrlees',
            'Tim Hunt',
            'Sir Paul Nurse',
            'John E. Sulston',
            'Sir Peter Mansfield',
            'Anthony J. Leggett',
            'Clive W.J. Granger',
            'Harold Pinter',
            'Sir Martin J. Evans',
            'Oliver Smithies',
            'Jack W. Szostak',
            'Robert G. Edwards',
            'Sir John B. Gurdon',
            'Peter Higgs',
            'Angus Deaton',
            'David J. Thouless',
            'F. Duncan M. Haldane',
            'J. Michael Kosterlitz',
            'Sir J. Fraser Stoddart',
            'Oliver Hart',
            'Richard Henderson',
            'Sir Gregory P. Winter',
            'Peter Ratcliffe',
            'M. Stanley Whittingham',
            'Michael Houghton',
            'Roger Penrose',
            'David MacMillan'
          ]
        },
        GH: { male: [ 'Kofi Annan' ] },
        GP: { male: [ 'Saint-John Perse' ] },
        GR: { male: [ 'Odysseus Elytis' ] },
        GT: { male: [ 'Miguel Angel Asturias' ] },
        HR: { male: [ 'Leopold Ruzicka' ] },
        HU: {
          male: [
            'Eugene Wigner',
            'Dennis Gabor',
            'George de Hevesy',
            'George A. Olah',
            'Albert Szent-Györgyi',
            'Georg von Békésy',
            'John C. Harsanyi',
            'Imre Kertész',
            'Avram Hershko'
          ]
        },
        ID: { male: [ 'Willem Einthoven' ] },
        IE: {
          male: [
            'Ernest T.S. Walton',
            'William Butler Yeats',
            'George Bernard Shaw',
            'Samuel Beckett',
            'William C. Campbell'
          ]
        },
        IL: { male: [ 'Dan Shechtman', 'Arieh Warshel' ] },
        IN: {
          male: [
            'Sir Chandrasekhara Venkata Raman',
            'Ronald Ross',
            'H. Gobind Khorana',
            'Rudyard Kipling',
            'Rabindranath Tagore',
            'Amartya Sen',
            'Venkatraman Ramakrishnan',
            'Kailash Satyarthi',
            'Abhijit Banerjee'
          ]
        },
        IQ: { female: [ 'Nadia Murad' ] },
        IR: { female: [ 'Shirin Ebadi', 'Doris Lessing' ] },
        IS: { male: [ 'Halldór Laxness' ] },
        IT: {
          male: [
            'Luigi Pirandello',
            'Salvatore Quasimodo',
            'Eugenio Montale',
            'Dario Fo',
            'Franco Modigliani',
            'Riccardo Giacconi',
            'Mario R. Capecchi',
            'Giorgio Parisi'
          ]
        },
        JP: {
          male: [
            'Hideki Yukawa',     'Sin-Itiro Tomonaga',
            'Leo Esaki',         'Kenichi Fukui',
            'Susumu Tonegawa',   'Eisaku Sato',
            'Yasunari Kawabata', 'Kenzaburo Oe',
            'Hideki Shirakawa',  'Ryoji Noyori',
            'Masatoshi Koshiba', 'Koichi Tanaka',
            'Yoichiro Nambu',    'Makoto Kobayashi',
            'Toshihide Maskawa', 'Osamu Shimomura',
            'Akira Suzuki',      'Shinya Yamanaka',
            'Isamu Akasaki',     'Hiroshi Amano',
            'Shuji Nakamura',    'Satoshi Ōmura',
            'Takaaki Kajita',    'Yoshinori Ohsumi',
            'Kazuo Ishiguro',    'Tasuku Honjo',
            'Akira Yoshino',     'Syukuro Manabe'
          ]
        },
        KE: { female: [ 'Wangari Maathai' ] },
        KR: { male: [ 'Charles J. Pedersen', 'Kim Dae-jung' ] },
        LB: { male: [ 'Ardem Patapoutian' ] },
        LC: { male: [ 'Derek Walcott', 'Sir Arthur Lewis' ] },
        LR: { female: [ 'Ellen Johnson Sirleaf', 'Leymah Gbowee' ] },
        LT: { male: [ 'Aaron Klug', 'Andrew V. Schally', 'Czeslaw Milosz' ] },
        LU: { male: [ 'Gabriel Lippmann', 'Jules A. Hoffmann' ] },
        LV: { male: [ 'Wilhelm Ostwald' ] },
        MA: { male: [ 'Serge Haroche' ] },
        MG: { male: [ 'Claude Simon' ] },
        MK: { female: [ 'Anjezë Gonxhe Bojaxhiu' ] },
        MM: { female: [ 'Aung San Suu Kyi undefined' ] },
        MX: {
          male: [ 'Mario J. Molina', 'Alfonso García Robles', 'Octavio Paz' ]
        },
        NG: { male: [ 'Wole Soyinka' ] },
        NL: {
          male: [
            'Hendrik A. Lorentz',
            'Pieter Zeeman',
            'Johannes Diderik van der Waals',
            'Heike Kamerlingh Onnes',
            'Frits Zernike',
            'Nicolaas Bloembergen',
            'Simon van der Meer',
            "Gerardus 't Hooft",
            'Martinus J.G. Veltman',
            "Jacobus H. van 't Hoff",
            'Peter Debye',
            'Paul J. Crutzen',
            'Christiaan Eijkman',
            'Nikolaas Tinbergen',
            'Tobias Asser',
            'Jan Tinbergen',
            'Tjalling C. Koopmans',
            'Bernard L. Feringa',
            'Guido Imbens'
          ]
        },
        NO: { male: [ 'Edvard I. Moser' ] },
        NZ: {
          male: [ 'Ernest Rutherford', 'Maurice Wilkins', 'Alan MacDiarmid' ]
        },
        PE: { male: [ 'Mario Vargas Llosa' ] },
        PH: { female: [ 'Maria Ressa' ] },
        PK: { female: [ 'Malala Yousafzai' ] },
        PL: { female: [ 'Olga Tokarczuk' ] },
        PT: { male: [ 'Egas Moniz', 'José Saramago' ] },
        RO: { male: [ 'Stefan W. Hell' ] },
        RU: {
          male: [
            'Wilhelm Wien',
            'Pavel A. Cherenkov',
            'Igor Y. Tamm',
            'Nicolay G. Basov',
            'Pyotr Kapitsa',
            'Otto Wallach',
            'Paul Karrer',
            'Nikolay Semenov',
            'Ilya Prigogine',
            'Ivan Pavlov',
            'Fritz Lipmann',
            'Andrei Sakharov',
            'Mikhail Gorbachev',
            'Ivan Bunin',
            'Boris Pasternak',
            'Mikhail Sholokhov',
            'Alexandr Solzhenitsyn',
            'Joseph Brodsky',
            'Wassily Leontief',
            'Leonid Vitaliyevich Kantorovich',
            'Il´ja M. Frank',
            'Alexei Abrikosov',
            'Vitaly L. Ginzburg',
            'Leonid Hurwicz',
            'Andre Geim',
            'Konstantin Novoselov',
            'Dmitry Muratov',
            'Ales Bialiatski '
          ]
        },
        SE: {
          male: [
            'Verner von Heidenstam',
            'Erik Axel Karlfeldt',
            'Pär Lagerkvist',
            'Eyvind Johnson',
            'Harry Martinson',
            'Gunnar Myrdal',
            'Bertil Ohlin',
            'Arvid Carlsson',
            'Tomas Tranströmer',
            'Tomas Lindahl',
            'Svante Pääbo'
          ]
        },
        SI: { male: [ 'Fritz Pregl' ] },
        SK: { male: [ 'Philipp Lenard' ] },
        TL: { male: [ 'Carlos Filipe Ximenes Belo', 'José Ramos-Horta' ] },
        TR: { male: [ 'Giorgos Seferis', 'Orhan Pamuk', 'Aziz Sancar' ] },
        TT: { male: [ 'V. S. Naipaul' ] },
        TW: { male: [ 'Yuan T. Lee' ] },
        UA: { female: [ 'Svetlana Alexievich' ] },
        US: { male: [ 'Ben Bernanke', 'Douglas Diamond', 'Philip Dybvig' ] },
        VE: { male: [ 'Baruj Benacerraf' ] },
        VN: { male: [ 'Le Duc Tho undefined' ] },
        YE: { female: [ 'Tawakkol Karman' ] },
        ZA: { male: [ 'Sydney Brenner', 'J. M. Coetzee', 'Michael Levitt' ] },
        ZW: { male: [ 'Albert Lutuli' ] }
    }
}

test('Test Challenge 2', () => {
    result = challenges.challenge2()
    expect(result).toStrictEqual(testCase2.output)
    console.log(result)
})