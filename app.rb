# topfloor.rb
require 'sinatra/partial'
require 'sinatra/content_for'
require 'sinatra'
require 'haml'

class Leco < Sinatra::Base
	helpers do
	  def partial(page, options={})
	    haml page.to_sym, options.merge!(:layout => false)
	  end
	end

	get '/' do
		haml :home
	end

	get '/leco' do
		haml :leco
	end

	get '/gafas' do
		haml :gafas
	end

	get '/producto' do
		haml :producto
	end

	get '/examen' do
		haml :examen
	end

	get '/micas' do
		haml :micas
	end

	get '/lentes_contacto' do
		haml :lentes_contacto
	end

	get '/checkout' do
		haml :checkout
	end

	get '/perfil' do
		haml :perfil
	end

	get '/brigada' do
		haml :brigada
	end

	get '/agendar' do
		haml :agendar
	end

	
end