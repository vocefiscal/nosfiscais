# To run:
# 1. Download and unzip this: http://agencia.tse.jus.br/estatistica/sead/odsele/detalhe_votacao_secao/detalhe_votacao_secao_2012.zip
# 2. Run this in Ruby / irb:

require 'csv'
require 'json'

zones = []; Dir['./*.txt'].each{ |file| CSV.foreach(file, encoding: 'ISO-8859-1:UTF-8', col_sep: ';') { |row| zones << { locatorType: 'electionZone', stateCode: row[5], cityCode: row[7], city: row[8], electionZone: row[9] } } }; nil

File.open('election_zones.json', 'w') { |file| file << JSON.generate(zones.uniq!) }
