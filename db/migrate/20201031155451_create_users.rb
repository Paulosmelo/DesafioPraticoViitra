class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :cpf
      t.date :birthDate
      t.string :email
      t.string :cellphone
      t.string :address
      t.string :cep
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
