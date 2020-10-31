json.extract! user, :id, :name, :cpf, :birthDate, :email, :cellphone, :address, :cep, :city, :state, :created_at, :updated_at
json.url user_url(user, format: :json)
