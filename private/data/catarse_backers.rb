# Get list backers list from catarse as CSV, then run this script.

require 'csv'

quote_chars = %w(" | ~ ^ & *)
begin
  @report = CSV.read('catarse_backers.csv', headers: :first_row, quote_char: quote_chars.shift)
rescue CSV::MalformedCSVError
  quote_chars.empty? ? raise : retry
end

emails = @report.map{ |row| row['Email perfil Catarse'] }

File.open('catarse-backers.txt', 'w') { |file| file << emails.map(&:strip).join(', ') }
